/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.menu.Menu",
{
  extend : qx.ui.menu.Menu,
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