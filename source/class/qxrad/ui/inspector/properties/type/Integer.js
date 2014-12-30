/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.ui.inspector.properties.type.Integer",
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
        control = new qx.ui.form.Spinner ( 0, null, 100000  );
    	control.addListener("changeValue", this._onStandardPropertyChange, this);    	
		break;
        case "nullable":
    	control = new qx.ui.form.CheckBox("null").set({textColor : "white" });
		break;					
      }
      this.setChild(id,control);
      
      return control;
    }
  }
});
