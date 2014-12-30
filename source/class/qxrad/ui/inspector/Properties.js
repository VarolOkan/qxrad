/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.ui.inspector.Properties",
{
  extend : qx.ui.tabview.Page,
  include : [qxrad.core.MChildsControl],

  construct : function(label, icon)
  {
    this.base(arguments,label, icon);
    this.setLayout(new qx.ui.layout.VBox());

    var bg = new qx.ui.decoration.Decorator ( );
    bg.set ({
      color: "white",
      backgroundImage : "qxrad/window.png",
      backgroundRepeat : "scale"
    } );
    this.getChildControl( "button" ).set ( { decorator: bg } );

// this.getChildControl("button").set({textColor : "white", decorator : new qx.ui.decoration.Background().set({ backgroundImage : "qxrad/window.png", backgroundRepeat : "scale" }) });
    var scroll = new qx.ui.container.Scroll();
    
    var layout = new qx.ui.layout.VBox();
    layout.setSpacing(4);
	var container = this.__container = new qx.ui.container.Composite(layout);
	scroll.add(container);
	this.add(scroll,{flex:1});
	var groups = qxrad.Components.getAllGroups();
	
	// Create all groups.
	for (var group in groups) {
		this._createChild(group);
	}
	
	// When a component is selected refresh all groups.
	qx.event.message.Bus.subscribe("selectedComponent", function (e) {
		var component = e.getData().component;
		var groups = this.getAllChild();
		
		for (var group in groups) {
			var visibility = "excluded";
			var groupExist = component.existGroup(group);
			if (groupExist) {
				visibility = "visible";				
				var props = groups[group].getAllChild();
				for (var prop in props) {
					var property = props[prop];

					// Test if the properties have been already defined by the user.
					//var value = component.getUserDefinedProperty(group,prop);
					property.refreshValue(component,undefined);
				}
			}
			groups[group].setVisibility(visibility);	
		}

	}, this);
	
  },

  properties : {
  
  },

  members : {
	_createChild : function(id)
    {
      var control;

      switch(id)
      {   	
        default :
    	control = new qxrad.ui.inspector.properties.Group(id);    	
    	this.__container.add(control);
      }
      this.setChild(id,control);
      
      return control;
    }
  }
});
