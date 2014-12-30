/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.toolbar.Separator",
{
  extend : qx.ui.toolbar.Separator,
  include : [ qxrad.components.MProperties ],




  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
  */

  construct : function()
  {
    this.base(arguments);
	qx.event.Registration.removeAllListeners(this);

	this.setResizable(false);
	this.setMoveable(false);

  },
  
  members : {

  }
});