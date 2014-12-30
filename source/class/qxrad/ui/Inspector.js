/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.ui.Inspector",
{
  extend : qx.ui.window.Window,
  include : [qxrad.core.MChildsControl],
  
  construct : function(caption, icon)
  {
    this.base(arguments,caption, icon);
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
    
    // Create childs //
    var tabview = this._createChild("tabview");
//    tabview.getChildControl("pane").set({decorator : new qx.ui.decoration.Background()});
    this._createChild("properties-page");	
  },

  properties : {},

  members : {
  	
	_createChild : function(id)
    {
      var control;

      switch(id)
      {
        case "tabview":
    	control = new qx.ui.tabview.TabView();
    	this.add(control, {flex:1});    	
        break;      	
        case "properties-page":
    	control = new qxrad.ui.inspector.Properties("Properties", "qx/icon/Oxygen/16/apps/utilities-terminal.png");    	
    	this.getChild("tabview").add(control);
        break;
      }
      this.setChild(id,control);
      
      return control;
    }      
  }
});
