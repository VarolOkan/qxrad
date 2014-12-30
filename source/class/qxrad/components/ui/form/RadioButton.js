/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.form.RadioButton",
{
  extend : qx.ui.form.RadioButton,
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
    this.setLabel("Radio Button");
	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("ATOM","label","\"Radio Button\"");
	});    
  }
});