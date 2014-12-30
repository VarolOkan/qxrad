/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.form.TextField",
{
  extend : qx.ui.form.TextField,
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
    this.setValue("Text Field");
	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("ABSTRACTFIELD","value","\"Text Field\"");
	});
  }
});