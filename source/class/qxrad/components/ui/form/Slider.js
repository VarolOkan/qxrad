/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.form.Slider",
{
  extend : qx.ui.form.Slider,
  include : [ qxrad.components.MProperties ],




  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

  construct : function(orientation)
  {
    this.base(arguments, orientation);
	qx.event.Registration.removeAllListeners(this);
  }
});