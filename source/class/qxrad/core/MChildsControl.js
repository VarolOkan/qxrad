/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Mixin.define("qxrad.core.MChildsControl",
{
  members : {
    getChild : function (id) {
    	
    	if (this.__childs[id] == null)
    		this._createChild(id);
    	
    	return this.__childs[id] || null;
    },
    setChild : function(id,child) {
    	if (this.__childs === undefined)
    		this.__childs = [];

    	this.__childs[id] = child;
    },
    getAllChild : function () {
    	return this.__childs || null;
    }
  }
	
});