/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.form.MenuButton",
{
  extend : qx.ui.form.MenuButton,
  include : [ qxrad.components.MProperties ],




  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

  construct : function(label, icon)
  {
    this.base(arguments, label, icon);
	qx.event.Registration.removeAllListeners(this);
    this.setLabel("Menu Button");
	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("ATOM","label","\"Menu Button\"");
	});    
  }
});