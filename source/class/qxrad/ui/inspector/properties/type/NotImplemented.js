/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.ui.inspector.properties.type.NotImplemented",
{
  extend : qxrad.ui.inspector.properties.type.Abstract,



  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

  construct : function(group,property) {
    this.base(arguments,group,property);
    
  },

  properties :
  {

  },

  members :
  {
	_createChild : function(id)
    {
      var control;

      switch(id)
      {   	
        case "label":
    	control = new qx.ui.basic.Label(this.getName()).set({textColor : "white" });    	
		break;
        case "type":
    	control = new qx.ui.basic.Label("Not implemented (sorry)").set({textColor : "white" });    	
		break;
        case "nullable":
    	control = new qx.ui.core.Widget().set({width : 1,height : 1});    	
		break;					
      }
      this.setChild(id,control);
      
      return control;
    },
    getQxradProperty : function()
    {
      return null;
    },
    setQxradProperty : function(value)
    {
     return false;
    },
    refreshValue : function (component,value) {
		// nothing to do	
    }    
  }
});