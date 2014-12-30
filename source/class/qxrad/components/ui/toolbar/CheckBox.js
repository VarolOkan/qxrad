/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.toolbar.CheckBox",
{
  extend : qx.ui.toolbar.CheckBox,
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
	this.setLabel("Check Box");
    
	this.setResizable(false);
	this.setMoveable(false);
	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("ATOM","label","\"Check Box\"");
	});
  },
  
  members : {

  }
});