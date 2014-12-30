/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.form.DateField",
{
  extend : qx.ui.form.DateField,
  include : [ qxrad.components.MProperties ],




  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

  construct : function()
  {
    this.base(arguments);
	qx.event.Registration.removeAllListeners(this);
    this.setDate(new Date());
	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("DATEFIELD","date","new Date()");
	});	
  }
});