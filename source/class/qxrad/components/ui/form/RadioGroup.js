/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.form.RadioGroup",
{
  extend : qx.ui.form.RadioGroup,
  include : [ qxrad.components.MProperties ],




  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

  construct : function(varargs)
  {
    this.base(arguments, varargs);
	qx.event.Registration.removeAllListeners(this);

  }
});