/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2007 David Pérez Carmona
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * David Perez Carmona (david-perez)
     * Sebastian Werner (wpbasti)
     * Fabian Jakobs (fjakobs)

************************************************************************ */

/**
 * Provides resizing behavior to any widget.
 */
qx.Mixin.define("qxrad.core.MResizable",
{
  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  construct : function()
  {

  },





  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    /** Whether the widget is resizable */
    resizable :
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

    __resizeActive : null,
    __resizeLeft : null,
    __resizeTop : null,
    __resizeStart : null,
    
    __resizeHandle : null,

    __resizeTo :
    {
      "n-resize" : 1,
      "s-resize" : 2,
      "w-resize" : 4,
      "e-resize" : 8,

      "nw-resize" : 5,
      "sw-resize" : 6,
      "ne-resize" : 9,
      "se-resize" : 10
    },



    _activateResizeHandle : function(widget, resizeTo)
    {
		if (this.__resizeHandle) {
			var oldWidget = this.__resizeHandle;
			oldWidget.addListener("mousedown", this.__onResizeMouseDown, this, true);
			oldWidget.addListener("mouseup", this.__onResizeMouseUp, this);
			oldWidget.addListener("mousemove", this.__onResizeMouseMove, this);
			oldWidget.addListener("mouseout", this.__onResizeMouseOut, this);
			oldWidget.addListener("losecapture", this.__onResizeLoseCapture, this);	        
		}

      	this.__resizeHandle = widget;
      	this.__resizeActive = this.__resizeTo[resizeTo];
      	
		widget.addListener("mousedown", this.__onResizeMouseDown, this, true);
	    widget.addListener("mouseup", this.__onResizeMouseUp, this);
	    widget.addListener("mousemove", this.__onResizeMouseMove, this);
	    widget.addListener("mouseout", this.__onResizeMouseOut, this);
	    widget.addListener("losecapture", this.__onResizeLoseCapture, this);
    },
	




    /*
    ---------------------------------------------------------------------------
      CORE FEATURES
    ---------------------------------------------------------------------------
    */


    /*
    ---------------------------------------------------------------------------
      RESIZE SUPPORT
    ---------------------------------------------------------------------------
    */

    /**
     * Computes the new boundaries at each interval
     * of the resize sequence.
     *
     * @param e {qx.event.type.Mouse} Last mouse event
     */
    __computeResizeResult : function(e)
    {
      // Detect mode
      var resizeActive = this.__resizeActive;

      // Read size hint
      var hint = this.getSizeHint();

      // Read original values
      var start = this.__resizeStart;
      var width = start.width;
      var height = start.height;
      var left = start.left;
      var top = start.top;
      var diff;

      // North or south
      if (resizeActive&1 || resizeActive&2)
      {
        diff = e.getDocumentTop() - this.__resizeTop;

        if (resizeActive&1) {
          height -= diff;
        } else {
          height += diff;
        }

        if (height < hint.minHeight) {
          height = hint.minHeight;
        } else if (height > hint.maxHeight) {
          height = hint.maxHeight;
        }

        if (resizeActive&1) {
          top += start.height - height;
        }
      }

      // West or east
      if (resizeActive&4 || resizeActive&8)
      {
        diff = e.getDocumentLeft() - this.__resizeLeft;

        if (resizeActive&4) {
          width -= diff;
        } else {
          width += diff;
        }

        if (width < hint.minWidth) {
          width = hint.minWidth;
        } else if (width > hint.maxWidth) {
          width = hint.maxWidth;
        }

        if (resizeActive&4) {
          left += start.width - width;
        }
      }

      var bounds = this.__applyComponent.getBounds();

      return {
		left : left,
		top : top,
        width : width,
        height : height
      };
    },


    /** {Map} Maps internal states to cursor symbols to use */
    __resizeCursors :
    {
      1  : "n-resize",
      2  : "s-resize",
      4  : "w-resize",
      8  : "e-resize",

      5  : "nw-resize",
      6  : "sw-resize",
      9  : "ne-resize",
      10 : "se-resize"
    },


    /*
    ---------------------------------------------------------------------------
      RESIZE EVENT HANDLERS
    ---------------------------------------------------------------------------
    */

    /**
     * Event handler for the mouse down event
     *
     * @param e {qx.event.type.Mouse} The mouse event instance
     */
    __onResizeMouseDown : function(e)
    {
      // Check for active resize
      if (!this.__resizeActive) {
        return;
      }

      // Add resize state
      this.addState("resize");

      // Enable capturing
      this.__resizeHandle.capture();

      // Store mouse coordinates
      this.__resizeLeft = e.getDocumentLeft();
      this.__resizeTop = e.getDocumentTop();

      // Cache bounds
      var bounds   = this.__applyComponent.getBounds();
      
      this.__resizeStart = { top    : bounds.top,
                             left   : bounds.left,
                             width  : bounds.width,
                             height : bounds.height };
      // Stop event
      e.stop();
    },


    /**
     * Event handler for the mouse up event
     *
     * @param e {qx.event.type.Mouse} The mouse event instance
     * @return {void}
     */
    __onResizeMouseUp : function(e)
    {
      // Check for active resize
      if (!this.__resizeActive) {
        return;
      }

      // Clear mode
      this.__resizeActive = 0;

      // Remove resize state
      this.removeState("resize");

      // Reset cursor
      this.__resizeHandle.resetCursor();
      this.getApplicationRoot().resetGlobalCursor();

      // Disable capturing
      this.__resizeHandle.releaseCapture();
    },


    /**
     * Event listener for <code>losecapture</code> event.
     *
     * @param e {qx.event.type.Event} Lose capture event
     */
    __onResizeLoseCapture : function(e)
    {
      // Check for active resize
      if (!this.__resizeActive) {
        return;
      }

      // Reset cursor
      this.__resizeHandle.resetCursor();
      this.getApplicationRoot().resetGlobalCursor();

      // Remove drag state
      this.removeState("move");

    },

    /**
     * Event handler for the mouse move event
     *
     * @param e {qx.event.type.Mouse} The mouse event instance
     * @return {void}
     */
    __onResizeMouseMove : function(e)
    {
      if (this.hasState("resize"))
      {
        var bounds = this.__computeResizeResult(e);
		var widget = this.getChild("mover");

		// diff to center and side
		var diff = 5;
		
		// Update size
		
		// East or West      	
   		if (this.__resizeActive&8 || this.__resizeActive&4) {
   			//widget.setWidth(bounds.width-diff);
  			this.__applyComponent.setWidth(bounds.width-diff);
   			this.fireDataEvent("changeWidth", bounds.width-diff);   			
   		}
   		
   		// South or North
   		if (this.__resizeActive&2 || this.__resizeActive&1) {
   			//widget.setHeight(bounds.height-diff);
   			this.__applyComponent.setHeight(bounds.height-diff);
   			this.fireDataEvent("changeHeight", bounds.height-diff);
   		}

		// Update postion
			
		// West
 		if (this.__resizeActive&4) {
          //this.setLayoutProperties({left : bounds.left-diff});
	      this.__applyComponent.setLayoutProperties({left : bounds.left-diff});
	      this.fireDataEvent("changeLeft", bounds.left-diff);           
		}
		
		// North
		if (this.__resizeActive&1) {
          //this.setLayoutProperties({top : bounds.top-diff});
	      this.__applyComponent.setLayoutProperties({top : bounds.top-diff});
	      this.fireDataEvent("changeTop", bounds.top-diff);          
		}          

        // Full stop for event
        e.stop();
      }
      else if (!this.hasState("maximized"))
      {

        var resizeActive = this.__resizeActive;
        var root = this.getApplicationRoot();

        if (resizeActive)
        {
          var cursor = this.__resizeCursors[resizeActive];
          this.__resizeHandle.setCursor(cursor);
          root.setGlobalCursor(cursor);
        }
        else if (this.__resizeHandle.getCursor())
        {
          this.__resizeHandle.resetCursor();
          root.resetGlobalCursor();
        }
      }
    },


    /**
     * Event handler for the mouse out event
     *
     * @param e {qx.event.type.Mouse} The mouse event instance
     * @return {void}
     */
    __onResizeMouseOut : function(e)
    {
      // When the mouse left the window and resizing is not yet
      // active we must be sure to (especially) reset the global
      // cursor.
      if (this.__resizeHandle.getCursor() && !this.hasState("resize"))
      {
        this.__resizeHandle.resetCursor();
        this.getApplicationRoot().resetGlobalCursor();
      }
    }
  },





  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */

  destruct : function() {
    
  }
});
