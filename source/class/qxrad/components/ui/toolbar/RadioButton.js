/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.toolbar.RadioButton",
{
  extend : qx.ui.toolbar.RadioButton,
  include : [ qxrad.components.MProperties ],




  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
  */

  construct : function(label, icon)
  {
    this.base(arguments,label, icon);
	qx.event.Registration.removeAllListeners(this);
	this.setLabel("Radio Button");
    
	this.setResizable(false);
	this.setMoveable(false);

	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("ATOM","label","\"Radio Button\"");
	});

  },
  
  members : {

  }
});