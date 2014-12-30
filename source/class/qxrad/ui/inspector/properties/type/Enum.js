/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.ui.inspector.properties.type.Enum",
{
  extend : qxrad.ui.inspector.properties.type.Abstract,

  construct : function(group,property) {

    this.setValues(property.values);

    this.base(arguments,group,property);
	
	
  },

  properties :
  {
	values : {
		check : "Array",
		init : []
	}

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
		control = new qx.ui.form.ComboBox();
        var items = this.getValues();

        for (var i=0, l=items.length; i<l; i++)
        {
          var item = new qx.ui.form.ListItem(items[i]);
          control.add(item);
        }		
    	control.addListener("changeValue", this._onStandardPropertyChange, this);    	
		break;
        case "nullable":
    	control = new qx.ui.form.CheckBox("null").set({textColor : "white" });
		break;					
      }
      this.setChild(id,control);
      
      return control;
    },
    setQxradProperty : function(value)
    {
      var component = this._component;
      if (component == null) {
      	return false;
      }      
      var name = this.getName();

     var setter = "set" + qx.lang.String.firstUp(name);
     component[setter](value);     
     component.setUserDefinedProperties(this.getGroup(),name,"\"" + value + "\"");
     return true;
    }    
  }
});