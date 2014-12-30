/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.layout.Basic",
{
  extend : qx.ui.layout.Basic,
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