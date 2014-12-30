/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.ui.Source",
{
  extend : qx.ui.window.Window,
  	
  construct : function(caption, icon)
  {
    this.base(arguments,caption, icon);
    this.addListenerOnce("resize", this.center, this);
    var bg = new qx.ui.decoration.Decorator ( );
    bg.set ({
      backgroundImage : "qxrad/window-black.png",
      backgroundRepeat : "scale"
    } );
    this.getChildrenContainer().set ( { decorator: bg } );
    bg = new qx.ui.decoration.Decorator ( );
    bg.set ({
      backgroundImage : "qxrad/window-black.png",
      backgroundRepeat : "scale"
    } );
    this.getChildControl( "captionbar" ).set ( { decorator: bg } );

// this.getChildrenContainer().set({decorator : new qx.ui.decoration.Background().set({ backgroundImage : "qxrad/window-black.png", backgroundRepeat : "scale" }) });
// this.getChildControl("captionbar").set({decorator : new qx.ui.decoration.Background().set({ backgroundImage : "qxrad/window-black.png", backgroundRepeat : "scale" }) });

    this.setLayout(new qx.ui.layout.VBox(10));
    this.setResizable(true);
    this.setMovable(true);
	
	var textArea = this.__textArea = new qx.ui.form.TextArea();
	this.add(textArea,{flex:1});
  },

  properties : {},

  members : {

  }
});
