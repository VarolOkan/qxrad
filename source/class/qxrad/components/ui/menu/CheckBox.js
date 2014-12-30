/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.menu.CheckBox",
{
  extend : qx.ui.menu.CheckBox,
  include : [ qxrad.components.MProperties,qxrad.core.MDragDrop ],




  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

  construct : function(label, menu)
  {
    this.base(arguments, label, menu);
	qx.event.Registration.removeAllListeners(this);
    this.setLabel("Check Box");
	this.setResizable(false);
	this.setMoveable(false);

    this.setIsDroppable(true);
    this.setDropDataType([ "qxrad.components.ui.menu.Separator", "qxrad.components.ui.menu.Menu","qxrad.components.ui.menu.Button","qxrad.components.ui.menu.CheckBox","qxrad.components.ui.menu.RadioButton" ]);
    this.setChildMoveable(false);
    this.setChildResizable(false);

	this.addListener("mouseover", function (e) {
		if (this.getMenu()) {
			this.getMenu().open();
		}
	});	
	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("MENU_ABSTRACTBUTTON","label","\"Check Box\"");
	});	    
  },
  members : 
  {
    __dragOver : function(e)
    {
      var result = false;

      var dropDataType = this.getDropDataType();

      if (dropDataType)
      {
        for (var i=0, l=dropDataType.length; i<l; i++)
        {
          if (dropDataType[i] == e.getRelatedTarget().getQgbClassname() || dropDataType[i] == "All") result = true;
        }
      }
	  
	  if (this.getMenu()) {
	  	this.getMenu().open();
	  	if (e.getRelatedTarget().getQgbClassname() == "qxrad.components.ui.menu.Menu")
	  		result = false;
	  }
	  else {
	  	if (e.getRelatedTarget().getQgbClassname() != "qxrad.components.ui.menu.Menu")
	  		result = false;	  
	  }
	  

      if (!result) {
      	e.preventDefault();
      }

    },  	
    __drop : function(e)
    {
      var type = e.getRelatedTarget().getQgbClassname();	
      var data = e.getData(type);	
      var classname = data;
      var componentClass = eval(classname);
      var component = new componentClass();
	
	  var parent = this;
	  if (this.getMenu()) {
	  	this.getMenu().add(component);
	  	parent = this.getMenu();
	  }
	  else {
	  	this.setMenu(component);
	  } 
      
      var msg = new qx.event.message.Message("addComponent",
      {
        parent    : parent,
        component : component
      });

      qx.event.message.Bus.dispatch(msg);

    }
  }
});