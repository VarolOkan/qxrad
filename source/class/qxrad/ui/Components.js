/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.ui.Components",
{
  extend : qx.ui.window.Window,
  	
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
    
    var tree = new qx.ui.tree.Tree().set({hideRoot : true,rootOpenClose : true, openMode : "tap", backgroundColor : "transparent"}); 
	
    var root = new qx.ui.tree.TreeFolder("Components");   
    tree.setRoot(root);
    root.setOpen(true);
	this.add(tree, {flex:1});	
	
	var components = qxrad.Components.getAllComponents();
	var categories = [];
	for (component in components) {
		var category = components[component].category;
		var name = components[component].name;
		var icon = components[component].icon;
		if (categories[category] === undefined) {
			var folder = new qx.ui.tree.TreeFolder(category).set({openSymbolMode : "always"});
			folder.getChildControl("label").set({textColor : "black"});
			
			folder.getChildControl("icon").setVisibility("excluded");
			categories[category] = folder;
			root.add(folder);
		}
	
		var item = new qxrad.ui.components.Item(component,name,icon);
		categories[category].add(item);
	}

  },

  properties : {},

  members : {

  }
});
