/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.form.RepeatButton",
{
  extend : qx.ui.form.RepeatButton,
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
    this.setLabel("Repeat Button");
	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("ATOM","label","\"Repeat Button\"");
	});    
  }
});