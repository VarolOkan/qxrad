/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.form.Spinner",
{
  extend : qx.ui.form.Spinner,
  include : [ qxrad.components.MProperties ],




  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

  construct : function(min,value,max)
  {
    this.base(arguments, min,value,max);
	qx.event.Registration.removeAllListeners(this);
  }
});