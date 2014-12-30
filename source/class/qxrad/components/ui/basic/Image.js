/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.basic.Image",
{
  extend : qx.ui.basic.Image,

  include : [ qxrad.components.MProperties],



  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

  construct : function(source)
  {
    this.base(arguments, source);
	qx.event.Registration.removeAllListeners(this);
    this.setSource("qxrad/test.png");

	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("IMAGE","source","\"qxrad/test.png\"");
	});
       
  }
});