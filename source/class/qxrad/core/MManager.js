/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Mixin.define("qxrad.core.MManager",
{
  construct : function()
  {
    var eventBus = qx.event.message.Bus;
    eventBus.subscribe("addComponent", this.__onAddComponent, this);
  },

  properties : {
  
  },

  members : {
	__onAddComponent : function (e) {
      var component = e.getData().component;
      var parent = e.getData().parent;      
      	
	}
  }
	
});