/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.tabview.Page",
{
  extend : qx.ui.tabview.Page,
  include : [ qxrad.components.MProperties, qxrad.core.MDragDrop ],




  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
  */

  construct : function(label, icon)
  {
    this.base(arguments,label, icon);
	qx.event.Registration.removeAllListeners(this);
    this.setLabel("Page");
	this.setResizable(false);
	this.setMoveable(false);

    this.setIsDroppable(true);
    this.setDropDataType([ "All" ]);
    
    this.setLayout(new qxrad.components.ui.layout.Basic());
	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("TABVIEW_PAGE","label","\"Button\"");
	});
  },
  
  members : {

  }
});