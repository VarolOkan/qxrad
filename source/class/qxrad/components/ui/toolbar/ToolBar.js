/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.toolbar.ToolBar",
{
  extend : qx.ui.toolbar.ToolBar,
  include : [ qxrad.components.MProperties,qxrad.core.MDragDrop ],




  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
  */

  construct : function()
  {
    this.base(arguments);
	qx.event.Registration.removeAllListeners(this);
    
	//this.setResizable(false);
	//this.setMoveable(false);
	this.set({width : 47, height : 29});
    this.setIsDroppable(true);
    this.setDropDataType([ "qxrad.components.ui.toolbar.Button","qxrad.components.ui.toolbar.CheckBox","qxrad.components.ui.toolbar.MenuButton","qxrad.components.ui.toolbar.Part","qxrad.components.ui.toolbar.RadioButton","qxrad.components.ui.toolbar.Separator","qxrad.components.ui.toolbar.SplitButton" ]);
    this.setChildMoveable(false);
    this.setChildResizable(false);

  },
  
  members : {

  }
});