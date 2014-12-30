/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.ui.Project",
{
  extend : qx.ui.window.Window,

  construct : function(caption, icon)
  {
    this.base(arguments,caption, icon);

    this.setLayout(new qx.ui.layout.VBox(10));
    this.setResizable(true);
    this.setMovable(true);  
  },

  properties : {},

  members : {

  }
});