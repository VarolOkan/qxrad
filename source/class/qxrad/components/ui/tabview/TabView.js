/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.tabview.TabView",
{
  extend : qx.ui.tabview.TabView,
  include : [ qxrad.components.MProperties,qxrad.core.MDragDrop ],




  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

  construct : function(barPosition)
  {
    this.base(arguments, barPosition);
	qx.event.Registration.removeAllListeners(this);
    
    this.setIsDroppable(true);
    this.setDropDataType([ "qxrad.components.ui.tabview.Page" ]);
    this.setChildMoveable(false);
    this.setChildResizable(false);

	this.addListener("appear", function (e) {
		var page = new qxrad.components.ui.tabview.Page();

		this.add(page);

		var msg = new qx.event.message.Message("addComponent",
		{
			parent    : this,
			component : page
		});
		qx.event.message.Bus.dispatch(msg);	
	});



  }
});