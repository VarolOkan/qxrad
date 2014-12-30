/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.form.ListItem",
{
  extend : qx.ui.form.ListItem,
  include : [ qxrad.components.MProperties ],




  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

  construct : function(label, icon, value)
  {
    this.base(arguments, label, icon, value);
	qx.event.Registration.removeAllListeners(this);
    this.setLabel("List Item");
	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("ATOM","label","\"List Item\"");
	});
  }
});