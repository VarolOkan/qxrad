/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.tree.TreeFile",
{
  extend : qx.ui.tree.TreeFile,
  include : [ qxrad.components.MProperties ],




  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

  construct : function(label)
  {
    this.base(arguments, label);
	qx.event.Registration.removeAllListeners(this);
	
	this.setLabel("Tree file");
	
	this.setResizable(false);
	this.setMoveable(false);
	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("ABSTRACTTREEITEM","label","\"Tree file\"");
	});	
  },
  
  members : 
  {	

  }
});