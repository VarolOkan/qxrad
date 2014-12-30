/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.demo.Selector",
{
  extend : qx.ui.container.Composite,

  include :
  [
  	qxrad.core.MChildsControl,
  	qx.ui.core.MPlacement,
    qxrad.core.MMovable,
    qxrad.core.MResizable
  ],

  construct : function()
  {
    this.base(arguments);
	var gridLayout = new qx.ui.layout.Grid();		
	
	this.__rowHeight = this.__columnWidth = 5;
	this.__applyComponent = null;
	this.setVisibility("excluded");

	// Set the prefered Width and Height for the column and Row 0.
	gridLayout.setColumnWidth(0,this.__columnWidth);
	gridLayout.setRowHeight(0,this.__rowHeight);
	// Set the prefered Width and Height for the column 4 and Row 4.
	gridLayout.setColumnWidth(4,this.__columnWidth);
	gridLayout.setRowHeight(4,this.__rowHeight);
	// Set the prefered Width and Height for the column 2 and Row 2.
	gridLayout.setColumnWidth(2,this.__columnWidth);
	gridLayout.setRowHeight(2,this.__rowHeight);	

	// Set column and row flex.	
	gridLayout.setColumnFlex(0, 1);
	gridLayout.setColumnFlex(1, 1);
	gridLayout.setColumnFlex(3, 1);
	gridLayout.setColumnFlex(4, 1);

	gridLayout.setRowFlex(0, 1);
	gridLayout.setRowFlex(1, 1);
	gridLayout.setRowFlex(3, 1);
	gridLayout.setRowFlex(4, 1);	
	
	this.setLayout(gridLayout);
	
	// Create selectors widget to resize the selected component.
	this._createChild("nw-resize");
	this._createChild("n-resize");
	this._createChild("ne-resize");
	this._createChild("w-resize");
	this._createChild("e-resize");
	this._createChild("se-resize");
	this._createChild("s-resize");
	this._createChild("sw-resize");

	// Create a center widget to move the selected component.
	var mover = this._createChild("mover");
		
	// active the move handle to the component
	this._activateMoveHandle(mover);

	this.addListener("selectorMove", function (e) {
		var component = this.__applyComponent;
		if (component == null || !component.getMoveable())
			return;
		
		var data = e.getData();
		//this.debug("selectorMove : " + data.top);
		component.fireDataEvent("changeTop", data.top);	
		component.fireDataEvent("changeLeft", data.left);
		component.setUserDefinedProperties("STANDARD","top",data.top);
		component.setUserDefinedProperties("STANDARD","left",data.left);
			
	});

	this.addListener("changeTop", function (e) {
		var component = this.__applyComponent;
		if (component == null || !component.getMoveable())
			return;
		
		var data = e.getData();
		
		component.fireDataEvent("changeTop", data);
		component.setUserDefinedProperties("STANDARD","top",data);
        	
	});

	this.addListener("changeLeft", function (e) {
		var component = this.__applyComponent;
		if (component == null || !component.getMoveable())
			return;
		
		var data = e.getData();
		component.fireDataEvent("changeLeft", data);
		component.setUserDefinedProperties("STANDARD","left",data);
	});

	this.addListener("changeWidth", function (e) {
		var component = this.__applyComponent;
		if (component == null || !component.getMoveable())
			return;
		
		var data = e.getData();
		component.fireDataEvent("changeWidth", data);
		component.setUserDefinedProperties("STANDARD","width",data);
	});

	this.addListener("changeHeight", function (e) {
		var component = this.__applyComponent;
		if (component == null || !component.getMoveable())
			return;
		
		var data = e.getData();
		component.fireDataEvent("changeHeight", data);
		component.setUserDefinedProperties("STANDARD","height",data);
	});

	qx.event.message.Bus.subscribe("selectedComponent", function (e) {
		
		var component = e.getData().component;
		this.applyComponent(component);			
	}, this);
	
  },

  properties : {
  
  },

  events : {
  	changeTop : "qx.event.type.Data",
  	changeLeft : "qx.event.type.Data",
  	changeHeight : "qx.event.type.Data",
  	changeWidth : "qx.event.type.Data"  	
  },
  members : {
	_createChild : function(id)
    {
      var control = new qx.ui.core.Widget().set({backgroundColor : "black"});

      switch(id)
      {
        case "nw-resize":
			control.addListener("mousemove", this.__onMouseMove(control,"nw-resize"), this);
			this.add(control, {row: 0, column: 0});
          	break;
        case "n-resize":
			control.addListener("mousemove", this.__onMouseMove(control,"n-resize"), this);
			this.add(control, {row: 0, column: 2});
          	break;
        case "ne-resize":
			control.addListener("mousemove", this.__onMouseMove(control,"ne-resize"), this);
			this.add(control, {row: 0, column: 4});
          	break;
        case "w-resize":
			control.addListener("mousemove", this.__onMouseMove(control,"w-resize"), this);
			this.add(control, {row: 2, column: 0});
          	break;
        case "e-resize":
			control.addListener("mousemove", this.__onMouseMove(control,"e-resize"), this);
			this.add(control, {row: 2, column: 4});
          	break;
        case "se-resize":
			control.addListener("mousemove", this.__onMouseMove(control,"se-resize"), this);
			this.add(control, {row: 4, column: 4});
          	break;
        case "s-resize":
			control.addListener("mousemove", this.__onMouseMove(control,"s-resize"), this);
			this.add(control, {row: 4, column: 2});
          	break;
        case "sw-resize":
			control.addListener("mousemove", this.__onMouseMove(control,"sw-resize"), this);
			this.add(control, {row: 4, column: 0});
          	break;
        case "mover":
			control.set({backgroundColor : null});
			this.add(control, {row: 1, column: 1, colSpan: 3, rowSpan:3});
          	break;          	          	           	           	          	          	          	          	
      }
      
      this.setChild(id,control);
      return control;
    },      
	__onMouseMove : function (resizer, resizeTo) {
		return function (e) {
			this._activateResizeHandle(resizer, resizeTo);
		};
	},

	applyComponent : function (component) {
		if (this.__applyComponent != null) {
			var oldComponent = this.__applyComponent;
			oldComponent.removeListener("resize",this.__connectResizeComponent,this);
		}
		this.__applyComponent = component;
		component.addListener("resize",this.__connectResizeComponent,this);
		
		this.getContentElement().insertInto(component.getContainerElement());
		this.setVisibility("visible");
		
		this.__selectorResize();

		
	},
  __selectorResize : function () {
  		var component = this.__applyComponent;
		var mover = this.getChild("mover");		
		var bounds = component.getBounds();	
		mover.setHeight(bounds.height-(2*this.__rowHeight));
		mover.setWidth(bounds.width-(2*this.__columnWidth));	
  },

  __connectResizeComponent : function (e) {
  		this.__selectorResize();
  }
 }    
});
