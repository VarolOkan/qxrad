/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.menubar.MenuBar",
{
  extend : qx.ui.menubar.MenuBar,
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
    
    this.setIsDroppable(true);
    this.setDropDataType([ "qxrad.components.ui.menubar.Button" ]);
    this.setChildMoveable(false);
    this.setChildResizable(false);

	this.addListener("appear", function (e) {
		var button = new qxrad.components.ui.menubar.Button();

		this.add(button);

		var msg = new qx.event.message.Message("addComponent",
		{
			parent    : this,
			component : button
		});
		qx.event.message.Bus.dispatch(msg);	
	});



  }
});