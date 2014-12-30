/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.form.PasswordField",
{
  extend : qx.ui.form.PasswordField,
  include : [ qxrad.components.MProperties ],




  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

  construct : function(value)
  {
    this.base(arguments, value);
	qx.event.Registration.removeAllListeners(this);
    this.setValue("Password Field");
	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("ABSTRACTFIELD","value","\"Password Field\"");
	});    
  }
});