/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.ui.Description",
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
    this.getChildControl ( "captionbar" ).set   ( { decorator: bg } );

//this.getChildrenContainer().set({decorator : new qx.ui.decoration.Background().set({ backgroundImage : "qxrad/window-black.png", backgroundRepeat : "scale" }) });
//this.getChildControl("captionbar").set({decorator : new qx.ui.decoration.Background().set({ backgroundImage : "qxrad/window-black.png", backgroundRepeat : "scale" }) });

    this.setLayout(new qx.ui.layout.VBox(10));
    this.setResizable(true);
    this.setMovable(true);
    
    var tree = this.__tree = new qx.ui.tree.Tree().set({hideRoot : true,rootOpenClose : true, openMode : "tap", backgroundColor : "transparent"}); 
	
    var root = new qx.ui.tree.TreeFolder("Description");   
    tree.setRoot(root);
    root.setOpen(true);
	this.add(tree, {flex:1});	
	
	this.__tabQgbId = {};
	this.__disabledEventChangeSelection = false;
    var eventBus = qx.event.message.Bus;
    eventBus.subscribe("addComponent", this.__onAddComponent, this);
    eventBus.subscribe("changeQgbID", this.__onChangeQgbID, this);	

	eventBus.subscribe("selectedComponent", function (e) {
		var component = e.getData().component;
		var treeItem =  this.__tabQgbId[component.getQgbID()].item;
		this.__disabledEventChangeSelection = true;
		this.__tree.select(treeItem);
		this.__disabledEventChangeSelection = false;
				
	}, this);
	
	tree.addListener("changeSelection", function (e) {
		if (this.__disabledEventChangeSelection)
			return;
		var qxradID = e.getData()[0].getLabel();
		var component = this.__tabQgbId[qxradID].component;
		var msg = new qx.event.message.Message("selectedComponent",
		{
		 	component : component
		});		
		qx.event.message.Bus.dispatch(msg);		
	},this);
      
  },

  properties : {

  },

  members : {

	__onAddComponent : function (e) {
      var component = e.getData().component;
      var parent = e.getData().parent;      
      
      var treeParent = this.__tree.getRoot();
      
      var qxradIdParent = this.__tabQgbId[parent.getQgbID()] || null;
      if (qxradIdParent != null) {
      	treeParent = this.__tabQgbId[parent.getQgbID()].item; 
      }

      var treeFolder = new qx.ui.tree.TreeFolder(component.getQgbID());
      var icon = qxrad.Components.getIconComponent(component.classname);
      treeFolder.setIcon(icon);
      treeFolder.getChildControl("label").set({textColor : "white"});
      this.__tabQgbId[component.getQgbID()] = { item : treeFolder, component : component};
      treeParent.add(treeFolder);      	
	},
	__onChangeQgbID : function (e) {
		var qxradID = e.getData().qxradID;
		var oldQgbID = e.getData().oldQgbID;
		var treeFolder = this.__tabQgbId[oldQgbID].item;
		var component = this.__tabQgbId[oldQgbID].component;
		treeFolder.setLabel(qxradID);
		this.__tabQgbId[component.getQgbID()] = { item : treeFolder, component : component};
		delete this.__tabQgbId[oldQgbID];
	}

  }
});
