/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.container.Composite",
{
  extend : qx.ui.container.Composite,
  include : [ qxrad.components.MProperties, qxrad.core.MDragDrop ],




  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
  */

  construct : function(layout)
  {
    this.base(arguments,layout);
	qx.event.Registration.removeAllListeners(this);

	// Set a default layout.
	this.setLayout(new qx.ui.layout.Basic());

    this.setIsDroppable(true);
    this.setDropDataType([ "All" ]);
    this.setChildMoveable(true);
    this.setChildResizable(true); 

	this.addListener("resize", function (e) {
		this.debug("resize : ");
		this.setUserDefinedProperties("LAYOUT","layout","new qx.ui.layout.Basic()");
	}); 	
  },
  
  members : {

  }
});