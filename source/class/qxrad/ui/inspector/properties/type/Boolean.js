/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.ui.inspector.properties.type.Boolean",
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
    	control = new qx.ui.form.CheckBox();
    	control.addListener("changeValue", this._onStandardPropertyChange, this);    	
		break;
        case "nullable":
    	control = new qx.ui.form.CheckBox("null").set({textColor : "white" });    		
		break;					
      }
      this.setChild(id,control);
      
      return control;
    },
    _onStandardPropertyChange : function(e)
    {
       if (this._disableSetting || !this.getApplyDirectly()) {
       	return;
       }
       var value = e.getTarget().getValue();
       this.setQxradProperty(value);
       this.setOldValue(value);
    },
    _updatingValue : function (value) {
		if (value === undefined) {
			value = this.getQxradProperty();	    		
		}
		
		if (value != null) {
			this._disableSetting = true;
			this.getChild("type").setvalue(value);
			this._disableSetting = false;
			this.setOldValue(value);
		}
		else {
			this.getChild("nullable").setValue(true);
		}    
    }    
  }
});
