/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Mixin.define("qxrad.core.MDragDrop",
{
  construct : function()
  {

  },

  properties : {
    isDrageable :
    {
      init  : false,
      check : "Boolean",
      apply : "__Drageable"
    },

    isDroppable :
    {
      init  : false,
      check : "Boolean",
      apply : "__Droppable"
    },

    dropDataType :
    {
      init  : [],
      check : "Array"
    }  
  },

  members : {
    __Drageable : function(value)
    {
      this.setDraggable(true);

      if (value)
      {
        this.addListener("dragstart", this.__dragStart, this);
        this.addListener("droprequest", this.__dropRequest, this);
      }
      else
      {
        this.removeListener("dragstart", this.__drop, this, true);
        this.removeListener("droprequest", this.__dragOver, this);
      }
    },

    __Droppable : function(value)
    {
      this.setDroppable(value);

      if (value)
      {
        this.addListener("drop", this.__drop, this);
        this.addListener("dragover", this.__dragOver, this);
      }
      else
      {
        this.removeListener("drop", this.__drop, this);
        this.removeListener("dragover", this.__dragOver, this);
      }
    },

    __dragStart : function(e)
    {
      e.addAction("copy");
      e.addType(this.getQgbClassname());
    },

    __dropRequest : function(e)
    {
      var type = e.getCurrentType();
      e.addData(type, this.getQgbClassname());
    },

    __dragOver : function(e)
    {
      var result = false;

      var dropDataType = this.getDropDataType();

      if (dropDataType)
      {
        for (var i=0, l=dropDataType.length; i<l; i++)
        {
          if (dropDataType[i] == e.getRelatedTarget().getQgbClassname() || dropDataType[i] == "All") result = true;
        }
      }

      if (!result) e.preventDefault();
    },

    __drop : function(e)
    {
      var left = e.getDocumentLeft() - this.getContentLocation().left;
      var top = e.getDocumentTop() - this.getContentLocation().top;
      var type = e.getRelatedTarget().getQgbClassname();
      var data = e.getData(type);

      var classname = data;
      var componentClass = eval(classname);
      var component = new componentClass();


      if (this.getChildMoveable())
      {
        this.add(component, {left : left , top : top});
        component.setUserDefinedProperties("STANDARD","left",left);
        component.setUserDefinedProperties("STANDARD","top",top);
      }
      else
      {
        component.setMoveable(false);
        this.add(component);
      }

      if (!this.getChildResizable()) 
      	component.setResizable(false);

      var msg = new qx.event.message.Message("addComponent",
      {
        parent    : this,
        component : component
      });

      qx.event.message.Bus.dispatch(msg);

    }
  }
	
});