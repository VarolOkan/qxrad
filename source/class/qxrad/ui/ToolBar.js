/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.ui.ToolBar",
{
  extend : qx.ui.toolbar.ToolBar,

  construct : function()
  {
    this.base(arguments);

    var bg = new qx.ui.decoration.Decorator ( );
    bg.set ({
      backgroundImage : "qxrad/window-black.png",
      backgroundRepeat : "scale"
    } );
    this.set ( { decorator: bg } );

    //this.set({decorator : new qx.ui.decoration.Background().set({ backgroundImage : "qxrad/window-black.png", backgroundRepeat : "scale" }) });
    var command = this._commande = new qxrad.ui.Commands();

    // create and add Part 1 to the toolbar
    var part1 = new qx.ui.toolbar.Part();
    var copyButton = new qx.ui.toolbar.Button("Copy", "qxrad/menu/edit-copy.png").set({textColor : "white"});
    var cutButton = new qx.ui.toolbar.Button("Cut", "qxrad/menu/edit-cut.png").set({textColor : "white"});
    var pasteButton = new qx.ui.toolbar.Button("Paste", "qxrad/menu/edit-paste.png").set({textColor : "white"});

    copyButton.addListener("execute", command.setExecute("copy"));
    cutButton.addListener("execute", command.setExecute("cut"));
    pasteButton.addListener("execute", command.setExecute("paste"));

    part1.add(copyButton);
    part1.add(cutButton);
    part1.add(pasteButton);
    part1.add(new qx.ui.toolbar.Separator());

    this.add(part1);
  }
});
