/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.ui.inspector.properties.type.String",
{
  extend : qxrad.ui.inspector.properties.type.Abstract,

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
    	control = new qx.ui.form.TextField();
    	control.addListener("changeValue", this._onStandardPropertyChange, this);    	
		break;
        case "nullable":
    	control = new qx.ui.form.CheckBox("null").set({textColor : "white" });    		
		break;					
      }
      this.setChild(id,control);
      
      return control;
    },
    
    setQgbProperty : function(value)
    {
      var component = this._component;
      if (component == null) {
      	return false;
      }      
      var name = this.getName();

     var setter = "set" + qx.lang.String.firstUp(name);
     component[setter](value);
     if (value == null) {
     	component.setUserDefinedProperties(this.getGroup(),name,value);
     }
     else {
     	component.setUserDefinedProperties(this.getGroup(),name,"\"" + value + "\"");
     }     
     
     return true;
    }
       
  }
});