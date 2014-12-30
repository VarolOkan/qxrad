/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.tree.Tree",
{
  extend : qx.ui.tree.Tree,
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
	
	var root = new qxrad.components.ui.tree.TreeFolder();
	root.setLabel("root");
	this.setRoot(root);

	this.addListener("appear", function (e) {

		var msg = new qx.event.message.Message("addComponent",
		{
			parent    : this,
			component : root
		});
		qx.event.message.Bus.dispatch(msg);
		//this.setUserDefinedProperties("TREE","root",root.getQxradID());
		root.setUserDefinedProperties("ABSTRACTTREEITEM","label","\"root\"");	
	});	
  },
  
  members : 
  {	

  }
});