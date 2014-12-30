/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.form.List",
{
  extend : qx.ui.form.List,
  include : [ qxrad.components.MProperties,qxrad.core.MDragDrop ],


  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

  construct : function(horizontal)
  {
    this.base(arguments, horizontal);
	qx.event.Registration.removeAllListeners(this);

    this.setIsDroppable(true);
    this.setDropDataType([ "qxrad.components.ui.form.ListItem" ]);
    this.setChildMoveable(false);
    this.setChildResizable(false);

  }
});