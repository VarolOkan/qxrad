qx.Class.define("qxrad.ui.Commands",
{
  extend : qx.core.Object,

  construct : function() {
    this.base(arguments);
  },

  members :
  {
    setCommand : function(command)
    {
      switch(command)
      {
        case "new":
          return this._new();
          break;

        case "open":
          return this._open();
          break;

        case "close":
          return this._close();
          break;

        case "save":
          return this._save();
          break;

        case "saveAs":
          return this._saveAs();
          break;

        case "exit":
          return this._exit();
          break;

        case "undo":
          return this._undo();
          break;

        case "redo":
          return this._redo();
          break;

        case "cut":
          return this._cut();
          break;

        case "copy":
          return this._copy();
          break;

        case "paste":
          return this._paste();
          break;

        case "buildSource":
          return this._buildSource();
          break;
      }
    },

    setExecute : function(command)
    {
      switch(command)
      {
        case "new":
          return this._executeNew;
          break;

        case "open":
          return this._executeOpen;
          break;

        case "close":
          return this._executeClose;
          break;

        case "save":
          return this._executeSave;
          break;

        case "saveAs":
          return this._executeSaveAs;
          break;

        case "exit":
          return this._executeExit;
          break;

        case "undo":
          return this._executeUndo;
          break;

        case "redo":
          return this._executeRedo;
          break;

        case "cut":
          return this._executeCut;
          break;

        case "copy":
          return this._executeCopy;
          break;

        case "paste":
          return this._executePaste;
          break;

        case "buildSource":
          return this._executeBuildSource;
          break;
      }
    },

    _new : function()
    {
      var command = new qx.ui.core.Command("Ctrl+N");
      command.addListener("execute", this._executeNew);
      return command;
    },


    _executeNew : function(e)
    {
      var msg = new qx.event.message.Message("newProject");
      qx.event.message.Bus.dispatch(msg);
    },


    _open : function()
    {
      var command = new qx.ui.core.Command("Ctrl+O");
      command.addListener("execute", this._executeOpen);
      return command;
    },


    _executeOpen : function(e) {
      this.debug("Execute command: " + this);
    },


    _close : function()
    {
      var command = new qx.ui.core.Command("Ctrl+W");
      command.addListener("execute", this._executeClose);
      return command;
    },


    _executeClose : function(e) {
      this.debug("Execute command: " + this);
    },


    _save : function()
    {
      var command = new qx.ui.core.Command("Ctrl+S");
      command.addListener("execute", this._executeSave);
      return command;
    },


    _executeSave : function(e) {
      this.debug("Execute command: " + this);
    },

    _saveAs : function()
    {
      var command = new qx.ui.core.Command("Shift+Ctrl+S");
      command.addListener("execute", this._executeSaveAs);
      return command;
    },

    _executeSaveAs : function(e) {
      this.debug("Execute command: " + this);
    },

    _exit : function()
    {
      var command = new qx.ui.core.Command("Ctrl+Q");
      command.addListener("execute", this._executeExit);
      return command;
    },


    _executeExit : function(e) {
      this.debug("Execute command: " + this);
    },

    _undo : function()
    {
      var command = new qx.ui.core.Command("Ctrl+Z");
      command.addListener("execute", this._executeUndo);
      return command;
    },

    _executeUndo : function(e) {
      this.debug("Execute command: " + this);
    },

    _redo : function()
    {
      var command = new qx.ui.core.Command("Ctrl+R");
      command.addListener("execute", this._executeRedo);
      return command;
    },

    _executeRedo : function(e) {
      this.debug("Execute command: " + this);
    },

    _cut : function()
    {
      var command = new qx.ui.core.Command("Ctrl+X");
      command.addListener("execute", this._executeCut);
      return command;
    },

    _executeCut : function(e) {
      this.debug("Execute command: " + this);
    },

    _copy : function()
    {
      var command = new qx.ui.core.Command("Ctrl+C");
      command.addListener("execute", this._executeCopy);
      return command;
    },

    _executeCopy : function(e) {
      this.debug("Execute command: " + this);
    },

    _paste : function()
    {
      var command = new qx.ui.core.Command("Ctrl+P");
      command.addListener("execute", this._executePaste);
      return command;
    },

    _executePaste : function(e) {
      this.debug("Execute command: " + this);
    },

    _buildSource : function()
    {
      var command = new qx.ui.core.Command("");
      command.addListener("execute", this._executeBuildSource);
      return command;
    },

    _executeBuildSource : function(e)
    {
      var msg = new qx.event.message.Message("buildSource");
      qx.event.message.Bus.dispatch(msg);
    }
  }
});
