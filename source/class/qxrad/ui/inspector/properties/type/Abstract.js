/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.ui.inspector.properties.type.Abstract",
{
  extend : qx.core.Object,
  include : [qxrad.core.MChildsControl],
  
  construct : function(group,property)
  {
    this.base(arguments);
	
	if (property.name != null)
		this.setName(property.name);
	if (group != null)
		this.setGroup(group);		
	if (property.nullable != null)
		this.setNullable(property.nullable);
	if (property.event != null)
		this.setEvent(property.event);
	if (property.type != null)
		this.setType(property.type);

	if (property.applyDirectly != null)
		this.setApplyDirectly(property.applyDirectly);

	this._createChild("label");
	this._createChild("type");
	if (this.getNullable()) {		
		var nullable = this._createChild("nullable");
		nullable.addListener("changeValue", this._onNullPropertyChange,this);		
	}	
	
	this._component = null;
	this._disableSetting = false;
	this._disableEventNullable = false;
  },

  properties :
  {
	name : {
		check : "String",
		init : null
	},
	group : {
		check : "String",
		init : null		
	},
	type : {
		check : "String",
		init : null
	},
	nullable : {
		check : "Boolean",
		init : false
	},
	value : {
		init : null
	},
	event : {
		check : "String",
		init : null
	},
	applyDirectly : {
		check : "Boolean",
		init : true
	},
	oldValue : {
		init : null
	}
  },

  members :
  {
    _onNullPropertyChange : function(e)
    {
        var control = e.getTarget();
        var type = this.getChild("type");
		var value = null;

        if (control.getValue())
        {
          type.setEnabled(false);
          this._disableEventNullable = true;          
        }        
        else
        {
          type.setEnabled(true);
          value = this.getOldValue();
        }
        this.setQgbProperty(value);
    },  	
    _onStandardPropertyChange : function(e)
    {
       if (this._disableSetting || !this.getApplyDirectly()) {
       	return;
       }
       var value = e.getTarget().getValue();
       this.setQgbProperty(value);
       this.setOldValue(value);
    },  	
    getQgbProperty : function()
    {
      var component = this._component;
      if (component == null) {
      	return null;
      }
      var name = this.getName();
      var getter = "get" + qx.lang.String.firstUp(name);
      return component[getter]();
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
     component.setUserDefinedProperties(this.getGroup(),name,value);
     return true;
    },
    refreshValue : function (component,value) {
    	var oldComponent = this._component;
    	if (oldComponent != null && this.getEvent() != null) {
    		oldComponent.removeListener(this.getEvent(), function (e) {
    			this.__updatingValue(e.getData().value);
    		}, this);
    	}
    	if (this.getEvent() != null) {
    		component.addListener(this.getEvent(), function (e) {
    			this._updatingValue(e.getData().value);
    			if (this.getNullable() && this.getChild("nullable").getValue() && !this._disableEventNullable) {
					this.getChild("nullable").setValue(false);
    			}
    			else {
    				this._disableEventNullable = false;
    			}   			
    		}, this);    	
    	}
		this._component = component;
		this._updatingValue(value);

    },
    _updatingValue : function (value) {
		if (value === undefined) {
			value = this.getQgbProperty();	    		
		}
		
		if (value != null) {
			this._disableSetting = true;
			this.getChild("type").setValue(value);
			this._disableSetting = false;
			this.setOldValue(value);
		}
		else {
			this.getChild("nullable").setValue(true);
		}    
    }      	
  }
});
