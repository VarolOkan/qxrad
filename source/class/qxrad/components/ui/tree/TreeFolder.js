/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.tree.TreeFolder",
{
  extend : qx.ui.tree.TreeFolder,
  include : [ qxrad.components.MProperties,qxrad.core.MDragDrop ],




  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

  construct : function(label)
  {
    this.base(arguments,label);
	qx.event.Registration.removeAllListeners(this);
	this.setLabel("Tree folder");
	this.setResizable(false);
	this.setMoveable(false);
	
	
    this.setIsDroppable(true);
    this.setDropDataType([ "qxrad.components.ui.tree.TreeFolder","qxrad.components.ui.tree.TreeFile" ]);
    this.setChildMoveable(false);
    this.setChildResizable(false);

    this.addListener("click",function (e) {
    	this.setOpen(true);
    });	
	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("ABSTRACTTREEITEM","label","\"Tree folder\"");
	});	    
  },
  
  members : 
  {	

  }
});