/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.toolbar.Button",
{
  extend : qx.ui.toolbar.Button,
  include : [ qxrad.components.MProperties ],




  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
  */

  construct : function(label, icon, command)
  {
    this.base(arguments,label, icon, command);
	qx.event.Registration.removeAllListeners(this);
	this.setLabel("Button");
    
	this.setResizable(false);
	this.setMoveable(false);
	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("ATOM","label","\"Button\"");
	});
  },
  
  members : {

  }
});