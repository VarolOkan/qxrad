/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.form.TextArea",
{
  extend : qx.ui.form.TextArea,
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
    this.setValue("Text Area");
	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("ABSTRACTFIELD","value","\"Text Area\"");
	});        
  }
});