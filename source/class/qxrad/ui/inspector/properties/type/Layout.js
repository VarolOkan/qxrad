/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.ui.inspector.properties.type.Layout",
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

		control = new qx.ui.container.Composite(new qx.ui.layout.VBox());
		var layoutChoose = this.__layoutChoose = new qx.ui.form.ComboBox();
        var items = this.getValues();
        for (var i=0, l=items.length; i<l; i++)
        {
          var item = new qx.ui.form.ListItem(items[i]);
          layoutChoose.add(item);
        }		
    	layoutChoose.addListener("changeValue", this._onStandardPropertyChange, this);
    	control.add(layoutChoose);
    	var layoutProperties = this.__layoutProperties = new qx.ui.container.Composite(new qx.ui.layout.VBox()); 		
		control.add(layoutProperties);
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
       this.displayLayoutProperties(value);
      var msg = new qx.event.message.Message("layoutChange",
      {
        layout    : value
      });

      qx.event.message.Bus.dispatch(msg);       
    },
    getQxradProperty : function()
    {
      var component = this._component;
      if (component == null) {
      	return null;
      }
      var name = this.getName();
      var getter = "get" + qx.lang.String.firstUp(name);
      return component[getter]();
    },
    setQxradProperty : function(value)
    {
      var component = this._component;
      if (component == null) {
      	return false;
      }      
      var name = this.getName();
      var layout = null;
	  switch (value) {
	  	case "Atom":
	  		layout = "new qx.ui.layout.Atom()";
	  	break;	  	
	  	case "Basic":
	  		layout = "new qx.ui.layout.Basic()";
	  	break;
	  	case "Canvas":
	  		layout = "new qx.ui.layout.Canvas()";
	  	break;
	  	case "Dock":
	  		layout = "new qx.ui.layout.Dock()";
	  	break;
	  	case "Grid":
	  		layout = "new qx.ui.layout.Grid()";
	  	break;
	  	case "Grow":
	  		layout = "new qx.ui.layout.Grow()";
	  	break;
	  	case "HBox":
	  		layout = "new qx.ui.layout.HBox()";
	  	break;
	  	case "VBox":
	  		layout = "new qx.ui.layout.VBox()";
	  	break;	  		  		  		  		  		  	
	  }
     
     var setter = "set" + qx.lang.String.firstUp(name);
     component[setter](eval(layout));
     component.setUserDefinedProperties(this.getGroup(),name,layout);
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
			value = this.getQxradProperty();	    		
		}

		var layout;
		
		if ( value instanceof qx.ui.layout.Basic) {
			layout = "Basic";
		}
		else {
			this.getChild("nullable").setValue(true);
			return;
		}
		
		this._disableSetting = true;
		this.__layoutChoose.setValue(layout);
		this._disableSetting = false;
		this.setOldValue(layout);
		this.displayLayoutProperties(layout);
    },
    displayLayoutProperties : function (layoutName) {
    	var layoutProperties = this.__layoutProperties;
    	layoutProperties.removeAll(); 
    	var layout_name = "LAYOUT_" + layoutName.toUpperCase();
		var layout_properties = new qxrad.ui.inspector.properties.Group(layout_name);
		layout_properties.setVisibility("visible");
		layoutProperties.add(layout_properties);
		
		// Refresh properties values of layout.
		var props = layout_properties.getAllChild();
		var component = this._component.getLayout();
		for (var prop in props) {
			var property = props[prop];		
			var getter = "get" + qx.lang.String.firstUp(property.getName());
			var value = component[getter]();
			property.refreshValue(component,value);
		}			
		 	
    }    
  }
});
