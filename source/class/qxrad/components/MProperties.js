/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Mixin.define("qxrad.components.MProperties",
{

  construct : function() {  	
	
	// Create groups properties for the component.
	this.userDefinedProperties = {};

  	var componentGroup = qxrad.Components.getComponentGroups(this.classname);
  	for (var i=0,l=componentGroup.length;i<l;i++) {  	
  		this.setGroupProperties(componentGroup[i]);
  	}
  	
  	
  	// Dispatch a message when the component is clicked.	
	this.addListener("click", function (e) {
		this.__selectedComponent();
	},this,true); 

	//this.setQxradID("qxrad_" + this.toHashCode());
	var tArr = this.classname.split(".");
	var name = tArr[tArr.length-1];
	this.setQxradID( name + this.toHashCode());
	
	//this.setUserDefinedProperties("QX_GUI_BUILDER","qxradID","qxrad_" + this.toHashCode());			
	
  },


  properties :
  {
    qxradID :
    {
      init  : null,
      check : "String"
    },

    childMoveable :
    {
      init  : true,
      check : "Boolean"
    },

    childResizable :
    {
      init  : true,
      check : "Boolean"
    },
    moveable :
    {
      init  : true,
      check : "Boolean"
    },
    resizable :
    {
      init  : true,
      check : "Boolean"
    }    
  },
  
  events : {
  	changeTop : "qx.event.type.Data",
  	changeLeft : "qx.event.type.Data",
  	changeHeight : "qx.event.type.Data",
  	changeWidth : "qx.event.type.Data"  	
  },
    
  members : {
	__selectedComponent : function () {
		var msg = new qx.event.message.Message("selectedComponent",
		{
		 	component : this
		});		
		qx.event.message.Bus.dispatch(msg);		
	},
	setGroupProperties : function(value) {
		var userDefinedProperties = this.userDefinedProperties;
	  	if (userDefinedProperties[value] === undefined) {
	  		userDefinedProperties[value] = {};
	  	}
	},
	getGroupProperties : function() {
		var groups = [];
		var userDefinedProperties = this.userDefinedProperties;
		for (var key in userDefinedProperties) {
			groups.push(key);
		}
		return groups;
	},
	existGroup : function (group) {
		if (this.userDefinedProperties[group] === undefined) {
			return false;
		}	
		
		return true;	
	},
	existGroupProperty : function (group,prop) {
		if (this.existGroup(group) === undefined) {
			return false;
		}
		else if (this.userDefinedProperties[group][prop] === undefined) {
			return false;
		}	
		
		return true;	
	},
	getUserDefinedProperty : function (group,prop) {
		if (this.existGroup(group) === undefined) {
			return null;
		}
	  	else if (this.userDefinedProperties[group][prop] === undefined) {
	  		return null;
	  	}
		return this.userDefinedProperties[group][prop];
	},	
	setUserDefinedProperties : function (group,prop,value) {
		if (this.existGroup(group) === undefined) {
			return false;
		}
		this.userDefinedProperties[group][prop] = value;
	},
	getUserDefinedProperties : function () {
		var properties = {};
		var groups = this.userDefinedProperties;
		for (var key in groups) {
			var props = groups[key];
			for (var name in props) {
				var value = props[name];
				var init = qx.core.Property.$$store.init;
				var initValue = this[init[name]];
				if (initValue != value) {
					properties[name] = value;
				}
			}
		}
		return properties;
	}					
  }
});