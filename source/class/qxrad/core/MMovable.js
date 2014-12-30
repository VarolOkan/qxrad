/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Fabian Jakobs (fjakobs)

************************************************************************ */

/**
 * Provides move behavior to any widget.
 */
qx.Mixin.define("qxrad.core.MMovable",
{
  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    /** Whether the widget is movable */
    movable :
    {
      check : "Boolean",
      init : true
    }

  },




  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    __moveHandle : null,
    __dragRange : null,
    __dragLeft : null,
    __dragTop : null,
    __parentLeft : null,
    __parentTop : null,


    /*
    ---------------------------------------------------------------------------
      CORE FEATURES
    ---------------------------------------------------------------------------
    */

    /**
     * Configures the given widget as a move handle
     *
     * @param widget {qx.ui.core.Widget} Widget to activate as move handle
     */
    _activateMoveHandle : function(widget)
    {
      if (this.__moveHandle) {
        throw new Error("The move handle could not be redefined!");
      }

      this.__moveHandle = widget;
      widget.addListener("mousedown", this._onMoveMouseDown, this);
      widget.addListener("mouseup", this._onMoveMouseUp, this);
      widget.addListener("mousemove", this._onMoveMouseMove, this);
      widget.addListener("losecapture", this.__onMoveLoseCapture, this);
    },


    /*
    ---------------------------------------------------------------------------
      MOVE SUPPORT
    ---------------------------------------------------------------------------
    */

    /**
     * Computes the new drag coordinates
     *
     * @param e {qx.event.type.Mouse} Mouse event
     */
    __computeMoveCoordinates : function(e)
    {
      var range = this.__dragRange;
      var mouseLeft = Math.max(range.left, Math.min(range.right, e.getDocumentLeft()));
      var mouseTop = Math.max(range.top, Math.min(range.bottom, e.getDocumentTop()));

      var viewportLeft = this.__dragLeft + mouseLeft;
      var viewportTop = this.__dragTop + mouseTop;

      return {
        viewportLeft : viewportLeft,
        viewportTop : viewportTop,

        parentLeft : viewportLeft - this.__parentLeft,
        parentTop : viewportTop - this.__parentTop
      };
    },




    /*
    ---------------------------------------------------------------------------
      MOVE EVENT HANDLERS
    ---------------------------------------------------------------------------
    */

    /**
     * Enables the capturing of the caption bar and prepares the drag session and the
     * appearance (translucent, frame or opaque) for the moving of the window.
     *
     * @param e {qx.event.type.MouseEvent} mouse down event
     * @return {void}
     */
    _onMoveMouseDown : function(e)
    {
      if (!this.getMovable() || this.hasState("maximized")) {
        return;
      }

      // Compute drag range
      var parent = this.__applyComponent.getLayoutParent();//this.getLayoutParent();
      var parentLocation = parent.getContentLocation();
      var parentBounds = parent.getBounds();

      this.__dragRange =
      {
        left : parentLocation.left,
        top : parentLocation.top,
        right : parentLocation.left + parentBounds.width,
        bottom : parentLocation.top + parentBounds.height
      };

      // Compute drag positions
      var widgetLocation = this.__applyComponent.getContainerLocation();//this.getContainerLocation();
      this.__parentLeft = parentLocation.left;
      this.__parentTop = parentLocation.top;

      this.__dragLeft = widgetLocation.left - e.getDocumentLeft();
      this.__dragTop = widgetLocation.top - e.getDocumentTop();

      // Add state
      this.addState("move");

      // Enable capturing
      this.__moveHandle.capture();

      // Stop event
      e.stop();
    },


    /**
     * Does the moving of the window by rendering the position
     * of the window (or frame) at runtime using direct dom methods.
     *
     * @param e {qx.event.type.Event} mouse move event
     * @return {void}
     */
    _onMoveMouseMove : function(e)
    {
      // Only react when dragging is active
      if (!this.hasState("move")) {
        return;
      }
	  var coords = this.__computeMoveCoordinates(e);
	  this.__applyComponent.setLayoutProperties({top : coords.parentTop, left : coords.parentLeft});
	  this.fireDataEvent("selectorMove", {top : coords.parentTop, left : coords.parentLeft});
       
    },


    /**
     * Disables the capturing of the caption bar and moves the window
     * to the last position of the drag session. Also restores the appearance
     * of the window.
     *
     * @param e {qx.event.type.MouseEvent} mouse up event
     * @return {void}
     */
    _onMoveMouseUp : function(e)
    {
      // Only react when dragging is active
      if (!this.hasState("move")) {
        return;
      }

      // Remove drag state
      this.removeState("move");

      // Disable capturing
      this.__moveHandle.releaseCapture();

      // Apply them to the layout
      var coords = this.__computeMoveCoordinates(e);
      
    },


    /**
     * Event listener for <code>losecapture</code> event.
     *
     * @param e {qx.event.type.Event} Lose capture event
     */
    __onMoveLoseCapture : function(e)
    {
      // Check for active move
      if (!this.hasState("move")) {
        return;
      }

      // Remove drag state
      this.removeState("move");

    }
  },





  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */

  destruct : function() {
    this._disposeObjects("__moveHandle");
    this._disposeFields("__dragRange");
  }
});
