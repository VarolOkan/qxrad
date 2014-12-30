/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/* ************************************************************************

#asset(qxrad/*)

************************************************************************ */

/**
 * This is the main application class of your custom application "qxGUIBuilder"
 */
qx.Class.define("qxrad.Application",
{
  extend : qx.application.Standalone,
  include : [qxrad.core.MChildsControl,qxrad.core.MManager],



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     */
    main : function()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get ( "qx.debug" ) )  {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */
      
    // Application width and height
    this.__width = 1280;
    this.__height = 450;
    	
	var container = this.__container = new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({ decorator : "main" });

	// Application menu
	this._createChild("menu");
	this._createChild("toolbar");

	// Area for dropped components
	this._createChild("builder");

	// Window	
	this._createChild("project");
	this._createChild("description");
	this._createChild("components");
	this._createChild("inspector");
	this._createChild("source");
	
	// Toolbar for managed windows
	this._createChild("tollbarwindow");
	
	this.getRoot().add(container);

	var builder = this.getChild("builder");
	var selector = new qxrad.demo.Selector();
	//selector.setVisibility("visible");
	//selector.getChild("mover").setWidth(200);
	builder.add(selector);	

	
	// for demo
/*	
	var demo = new qxrad.components.ui.form.Button("Remove me");
	demo.setLayoutProperties({top : 90, left: 500});
	//builder.add(demo);	
	demo.getContainerElement().add(selector.getContentElement());
	builder.add(demo);
	this.debug("Testing container : " + demo.getContainerElement());
	//demo.__selectedComponent();
      var msg = new qx.event.message.Message("addComponent",
      {
        parent    : builder,
        component : demo
      });

      qx.event.message.Bus.dispatch(msg);	
*/
	// end demo

    var eventBus = qx.event.message.Bus;
    eventBus.subscribe("buildSource", this.__onBuildSource, this);	
	
    },
    
	_createChild : function(id)
    {
      var control;

      switch(id)
      {
        case "menu":
          control = new qxrad.ui.Menu().set({width : this.getWidth()});
          this.__container.add(control);
          break;
        case "toolbar":
          control = new qxrad.ui.ToolBar().set({width : this.getWidth()});
          this.__container.add(control);
          break;
        case "builder":
          control = new qxrad.ui.Builder().set({width : this.getWidth(), height : this.getHeight()});
          this.__container.add(control);
          break;
        case "tollbarwindow":
          control = this.__createToolBarWindow();
          this.__container.add(control);
          break;          
        case "inspector":
          control = new qxrad.ui.Inspector("Inspector");
          control.setWidth(360);
		  control.setLayoutProperties({top : 35, left : 880});          
          this.getRoot().add(control);
          break;
        case "project":
          control = new qxrad.ui.Project("Project");
          this.getRoot().add(control);
          break; 
        case "components":
          control = new qxrad.ui.Components("Components");
          control.setWidth(150);
		  control.setLayoutProperties({top : 30, left : 20});          
          this.getRoot().add(control);
          break; 
        case "description":
          control = new qxrad.ui.Description("Application");
          control.setWidth(195);
		  control.setLayoutProperties({top : 80, left : 665});          
          this.getRoot().add(control);
          break;
        case "source":
          control = new qxrad.ui.Source("Source");
          control.setWidth(300);
          control.setHeight(300);
          this.getRoot().add(control);
          break;                                                                       
      }

      this.setChild(id,control);

      return control;
    },
    
    __createToolBarWindow : function()
    {
      var toolbar = new qx.ui.toolbar.ToolBar();
      var bg = new qx.ui.decoration.Decorator ( );
      bg.set ({
        backgroundImage : "qxrad/window-black.png",
        backgroundRepeat : "scale"
      } );
      toolbar.set ( { decorator: bg } );

// toolbar.set({decorator : new qx.ui.decoration.Background().set({ backgroundImage : "qxrad/window-black.png", backgroundRepeat : "scale" }) });
      
      var btWindowProject = new qx.ui.form.ToggleButton("Project", null);

      btWindowProject.addListener("changeValue", function(e)
      {
        var checked = e.getTarget().getValue();
        checked ? this.open() : this.close();
      },
      this.getChild("project"));

      this.getChild("project").addListener("close", function(e)
      {
        this.setValue(false);
      },
      btWindowProject);

      btWindowProject.setValue(true);

      var btWindowComponents = new qx.ui.form.ToggleButton("Components", null);

      btWindowComponents.addListener("changeValue", function(e)
      {
        var checked = e.getTarget().getValue();
        checked ? this.open() : this.close();
      },
      this.getChild("components"));

      this.getChild("components").addListener("close", function(e)
      {
        this.setValue(false);
      },
      btWindowComponents);

      btWindowComponents.setValue(true);

      var btWindowDescription = new qx.ui.form.ToggleButton("Description", null);

      btWindowDescription.addListener("changeValue", function(e)
      {
        var checked = e.getTarget().getValue();
        checked ? this.open() : this.close();
      },
      this.getChild("description"));

      this.getChild("description").addListener("close", function(e)
      {
        this.setValue(false);
      },
      btWindowDescription);

      btWindowDescription.setValue(true);

      var btWindowInspector = new qx.ui.form.ToggleButton("Inspector", null);

      btWindowInspector.addListener("changeValue", function(e)
      {
        var checked = e.getTarget().getValue();
        checked ? this.open() : this.close();
      },
      this.getChild("inspector"));
      this.getChild("inspector").addListener("close", function(e)
      {
        btWindowInspector.setValue(false);
      },
      btWindowInspector);

      btWindowInspector.setValue(true);

      var btWindowSource = this.__btWindowSource = new qx.ui.form.ToggleButton("Source", null);

      btWindowSource.addListener("changeValue", function(e)
      {
        var checked = e.getTarget().getValue();
        checked ? this.open() : this.close();
      },
      this.getChild("source"));

      this.getChild("source").addListener("close", function(e)
      {
        this.setValue(false);
      },
      btWindowSource);

      btWindowSource.setValue(false);

      toolbar.add(btWindowProject);
      toolbar.add(btWindowComponents);
      toolbar.add(btWindowDescription);
      toolbar.add(btWindowInspector);
      toolbar.add(btWindowSource);

      return toolbar;
    },
    
    
	getWidth : function () {
		return this.__width;
	},
	getHeight : function () {
		return this.__height;
	},
	__onBuildSource : function (e) {
		var description = this.getChild("description");
		var tree = description.__tree;
		var root = tree.getRoot();
		this.__sourceCode = [];
		this.__sourceCode.push("// Document is the application root\n");
		this.__sourceCode.push("var doc = this.getRoot();\n");
		this.__makeSource(root);
		var source = this.__sourceCode.join("\n");
		//this.info(source);
		var wSource = this.getChild("source");
		var textArea = wSource.__textArea;
		textArea.setValue(source);
		this.__btWindowSource.setValue(true);
	},
	__makeSource : function (object) {
		var noAdding = false;
		// Create the code for the object.
		if (object.getLevel() > -1) {
			var description = this.getChild("description");
			var tabQgbId = description.__tabQgbId;
			var component = tabQgbId[object.getLabel()].component;
			var qxradID = component.getQgbID();
			var classname = component.constructor.superclass.classname;
			this.__sourceCode.push("\n// Create " + qxradID);			
			this.__sourceCode.push("var " + qxradID + " = new " + classname + "();");
			var addingProperties = [];
			// Create the code for object properties.
			var props = component.getUserDefinedProperties();
			for (var name in props) {
				var value = props[name];
				if (name == "top" || name == "left") {
					addingProperties.push(name + " : " + value);
				}
				else {
					this.__sourceCode.push(qxradID + ".set" + qx.lang.String.firstUp(name) + "(" + value + ");");				
				}

			}
		}
		
		if (object.hasChildren()) {
			var tChilds = object.getChildren();
			for (var i=0, l=tChilds.length;i<l;i++) {
				this.__makeSource(tChilds[i]);
			}
		}

		// Return if is the root folder.
		if (object.getLevel() == -1) {
			return;
		}

		// check if the component is a qx.ui.tree.TreeFolder
		if (component.classname == "qxrad.components.ui.tree.TreeFolder") {
			this.debug("qx.ui.tree.TreeFolder : " + component.getQgbID());
			var tree = component.getTree();
			var rootQgbID = tree.getRoot().getQgbID();
			// check is the root folder
			if (component.getQgbID() == rootQgbID) {
				this.__sourceCode.push("\n// set the root tree");
				this.__sourceCode.push(tree.getQgbID() + ".setRoot(" + rootQgbID + ");");
				noAdding = true;
			}
		}
		
		if (!noAdding) {
			// create the code for added the object to the application.
			var add;		
			this.__sourceCode.push("\n// Add  " + qxradID + " to his parent");
			
			if ( object.getLevel() == 0) {
				add = "doc.add(" + qxradID ;
			}
			else {
				add = object.getParent().getLabel() + ".add(" + qxradID;
			}
			
			if (addingProperties.length > 0) {
				add += ", {";
				add += addingProperties.join(", ");
				add += "}";
			}		
			add += ");";
			this.__sourceCode.push(add);
		}		
	}
  }
});
