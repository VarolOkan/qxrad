/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.form.CheckBox",
{
  extend : qx.ui.form.CheckBox,
  include : [ qxrad.components.MProperties ],




  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

  construct : function(label)
  {
    this.base(arguments, label);
	qx.event.Registration.removeAllListeners(this);
    this.setLabel("Check Box");
	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("CHECKBOX","label","\"Check Box\"");
	});    
  }
});