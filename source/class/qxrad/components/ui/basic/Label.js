/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.basic.Label",
{
  extend : qx.ui.basic.Label,

  include : [ qxrad.components.MProperties],



  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

  construct : function(content)
  {
    this.base(arguments, content);
	qx.event.Registration.removeAllListeners(this);
    this.setContent("Label");
	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("LABEL","label","\"Button\"");
	});       
  }
});