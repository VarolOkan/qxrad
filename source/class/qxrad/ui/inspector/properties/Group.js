/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.ui.inspector.properties.Group",
{
  extend : qx.ui.container.Composite,
  include : [qxrad.core.MChildsControl],
  
  construct : function(groupName)
  {
    this.base(arguments,null);

    var layout = new qx.ui.layout.Grid(10, 5);
    layout.setColumnAlign(0, "left", "top");
    layout.setColumnMinWidth(0, 110);
    this.setLayout(layout);
	this.set({ decorator : "main" });	
	this.setVisibility("excluded");

	var group = this.__group = qxrad.Components.getGroup(groupName);
	
	if (group.name != null)
		this.setName(group.name);

	this.__row = 0;
    var groupName = new qx.ui.basic.Label(this.getName()).set({ paddingTop : 4, textColor : "white" });    	
    this.add(groupName,
	{
		row    : this.__row++,
	    column : 0
	});	
	var props = group.properties;
	
	for (prop in props) {
		props[prop].name = prop;
		var property = this._createProperty(props[prop]);
    	if (property != null) {
    		var label = property.getChild("label");
	    	this.add(label,
		    {
				row    : this.__row,
		        column : 0
			});
    		if (property.getNullable()) {
    			var nullable = property.getChild("nullable");
		    	this.add(nullable,
			    {
					row    : this.__row,
			        column : 2
				});    			
    		}
    		var type = property.getChild("type");
	    	this.add(type,
		    {
				row    : this.__row++,
		        column : 1
			});
			this.setChild(prop,property);    		
    	} 		
			
	}	
	
  },

  properties : {
	name : {
		check : "String",
		init : null
	}
  },

  members : {
	_createProperty : function(property)
    {
      var control;
	  var type = property.type;
      switch(type)
      {
      	case "qxradID" :
      		control = new qxrad.ui.inspector.properties.type.QgbID(this.getName(),property);
      		break;
      	case "string" :
      		control = new qxrad.ui.inspector.properties.type.String(this.getName(),property);
      		break;
      	case "integer" :
      		control = new qxrad.ui.inspector.properties.type.Integer(this.getName(),property);
      		break;
      	case "layout" :
      		control = new qxrad.ui.inspector.properties.type.Layout(this.getName(),property);
      		break;      		
      	case "layoutProperty" :
      		control = new qxrad.ui.inspector.properties.type.LayoutProperty(this.getName(),property);
      		break;
      	case "enum" :
      		control = new qxrad.ui.inspector.properties.type.Enum(this.getName(),property);
      		break;
      	case "boolean" :
      		control = new qxrad.ui.inspector.properties.type.Boolean(this.getName(),property);
      		break;
        default :
    		control = new qxrad.ui.inspector.properties.type.NotImplemented(this.getName(),property);
      }

      return control;
    }
  }
});