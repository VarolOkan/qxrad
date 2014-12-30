/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.form.SplitButton",
{
  extend : qx.ui.form.SplitButton,
  include : [ qxrad.components.MProperties ],




  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

  construct : function(label, icon, menu, command)
  {
    this.base(arguments, label, icon, menu, command);
	qx.event.Registration.removeAllListeners(this);
    this.setLabel("Split Button");
	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("SPLITBUTTON","label","\"Split Button\"");
	});    
  }
});