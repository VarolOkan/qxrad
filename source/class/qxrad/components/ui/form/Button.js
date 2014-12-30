/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.form.Button",
{
  extend : qx.ui.form.Button,
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
    this.setLabel("Button");
	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("ATOM","label","\"Button\"");
	});    
  }
});