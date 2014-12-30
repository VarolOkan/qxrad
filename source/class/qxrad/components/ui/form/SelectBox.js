/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.form.SelectBox",
{
  extend : qx.ui.form.SelectBox,
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
    //var list = this.getChildControl("list");
    var popup = this.getChildControl("popup");
    //qx.event.Registration.removeAllListeners(list);
    qx.event.Registration.removeAllListeners(popup);

    this.setIsDroppable(true);
    this.setDropDataType([ "qxrad.components.ui.form.ListItem" ]);
    this.setChildMoveable(false);
    this.setChildResizable(false);

    /** For display list **/
    //this.addListener("click",this._onClick);
    this.addListener("click",function (e) {
    	this.open();
    });

    /** for opening the popup list**/
/*
    this.getChildrenContainer().addListener("addItem", function(e) {
      this.open();
    }, this);
*/        
  },

  members : {}
});