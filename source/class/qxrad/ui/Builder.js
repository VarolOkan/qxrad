/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.ui.Builder",
{
  extend : qx.ui.container.Composite,
  include : [qxrad.core.MDragDrop],
  
  construct : function()
  {
    this.base(arguments);

    this.setLayout(new qx.ui.layout.Canvas());
    this.set({backgroundColor : "white"});
    this.setIsDroppable(true);
    this.setDropDataType([ "All" ]);

    this.setQxradID("qxrad_" + this.toHashCode());
  },

  events :
  {

  },

  properties : {
    qxradID :
    {
	  check : "String",
      init  : null
    },
    childMoveable : {
    	check : "Boolean",
    	init : true
    },
	childResizable : {
    	check : "Boolean",
    	init : true
    }    
  },

  members : {
  	
  }
});
