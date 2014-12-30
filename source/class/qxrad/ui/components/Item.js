/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.ui.components.Item",
{
  extend : qx.ui.tree.TreeFile,
  include : [qxrad.core.MDragDrop],
  
  construct : function(classname,name,icon)
  {
    this.base(arguments,name);

	this.setQgbClassname(classname);
	this.setQgbName(name);
	this.set({icon : icon});
	this.getChildControl("label").setVisibility("excluded");
	this.setToolTip(new qx.ui.tooltip.ToolTip(name));
	this.setIsDrageable(true);

  },

  properties : {
  	qxradName : {
  		check : "String",
  		init : null
  	},
  	qxradClassname : {
  		check : "String",
	  	init : null
  	}  	
  },

  members : {

  }
});