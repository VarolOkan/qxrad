/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */


qx.Class.define("qxrad.ui.Menu",
{
  extend : qx.ui.menubar.MenuBar,

  construct : function()
  {
    this.base(arguments);
    var bg = new qx.ui.decoration.Decorator ( );
    bg.set ({
      backgroundImage : "qxrad/window-black.png",
      backgroundRepeat : "scale"
    } );
    this.set ( { decorator: bg } );
//    this.set ( { decorator : new qx.ui.decoration.Background().set({ backgroundImage : "qxrad/window-black.png", backgroundRepeat : "scale" } ); } );	
    this._commande = new qxrad.ui.Commands();

    var fileMenu = new qx.ui.menubar.Button("File", null, this.__getFileMenu()).set({textColor : "white"});    
    var editMenu = new qx.ui.menubar.Button("Edit", null, this.__getEditMenu()).set({textColor : "white"});
    var buildMenu = new qx.ui.menubar.Button("Build", null, this.__getBuildMenu()).set({textColor : "white"});

    this.add(fileMenu);
    this.add(editMenu);
    this.add(buildMenu);
  },




  members :
  {

    __getFileMenu : function()
    {
      var menu = new qx.ui.menu.Menu;
      var command = this._commande;

      var newButton = new qx.ui.menu.Button("New", "qxrad/menu/document-new.png", command.setCommand("new"));
      var openButton = new qx.ui.menu.Button("Open", "qxrad/menu/document-open.png", command.setCommand("open"));
      var closeButton = new qx.ui.menu.Button("Close");
      var saveButton = new qx.ui.menu.Button("Save", "qxrad/menu/document-save.png", command.setCommand("save"));
      var saveAsButton = new qx.ui.menu.Button("Save as...", "qxrad/menu/document-save-as.png", command.setCommand("saveAs"));
      var exitButton = new qx.ui.menu.Button("Exit", "qxrad/menu/application-exit.png", command.setCommand("exit"));

      newButton.addListener("execute", command.setExecute("new"));
      openButton.addListener("execute", command.setExecute("open"));
      closeButton.addListener("execute", command.setExecute("close"));
      saveButton.addListener("execute", command.setExecute("save"));
      saveAsButton.addListener("execute", command.setExecute("saveAs"));
      exitButton.addListener("execute", command.setExecute("exit"));

      menu.add(newButton);
      menu.add(openButton);
      menu.add(closeButton);
      menu.add(saveButton);
      menu.add(saveAsButton);
      menu.add(exitButton);

      return menu;
    },

    __getEditMenu : function()
    {
      var menu = new qx.ui.menu.Menu;
      var command = this._commande;

      return menu;
    },

    __getBuildMenu : function()
    {
      var menu = new qx.ui.menu.Menu;
      var command = this._commande;
      var buildSourceButton = new qx.ui.menu.Button("Source", "qxrad/menu/build-button.png", command.setCommand("buildSource"));

      menu.add(buildSourceButton);

      return menu;
    }
  }
});
