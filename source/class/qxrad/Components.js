/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Bootstrap.define("qxrad.Components",
{
  statics :
  {
    __components :
    {
      "qxrad.components.ui.basic.Atom" :
      {
        category   : "basic",
        name       : "Atom",
        icon       : "qxrad/component/atom.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "ATOM" ]
      },

      "qxrad.components.ui.basic.Image" :
      {
        category   : "basic",
        name       : "Image",
        icon       : "qxrad/component/image.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "IMAGE" ]
      },

      "qxrad.components.ui.basic.Label" :
      {
        category   : "basic",
        name       : "Label",
        icon       : "qxrad/component/label.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "LABEL" ]
      },

      "qxrad.components.ui.form.Button" :
      {
        category   : "form",
        name       : "Button",
        icon       : "qxrad/component/button.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "ATOM", "BUTTON" ]
      },

      "qxrad.components.ui.form.CheckBox" :
      {
        category   : "form",
        name       : "CheckBox",
        icon       : "qxrad/component/checkbox.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "CHECKBOX" ]
      },

      "qxrad.components.ui.form.ComboBox" :
      {
        category   : "form",
        name       : "ComboBox",
        icon       : "qxrad/component/combobox.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "ABSTRACT_SELECT_BOX" ]
      },

      "qxrad.components.ui.form.DateField" :
      {
        category   : "form",
        name       : "DateField",
        icon       : "qxrad/component/datefield.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "DATEFIELD" ]
      },

      "qxrad.components.ui.form.List" :
      {
        category   : "form",
        name       : "List",
        icon       : "qxrad/component/list.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "LIST" ]
      },

      "qxrad.components.ui.form.ListItem" :
      {
        category   : "form",
        name       : "ListItem",
        icon       : "qxrad/component/listitem.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD","ATOM", "LISTITEM" ]
      },

      "qxrad.components.ui.form.MenuButton" :
      {
        category   : "form",
        name       : "MenuButton",
        icon       : "qxrad/component/menubutton.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "ATOM", "BUTTON" ]
      },

      "qxrad.components.ui.form.PasswordField" :
      {
        category   : "form",
        name       : "PasswordField",
        icon       : "qxrad/component/textfield.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "ABSTRACTFIELD", "TEXTFIELD" ]
      },

      "qxrad.components.ui.form.RadioButton" :
      {
        category   : "form",
        name       : "RadioButton",
        icon       : "qxrad/component/radiobutton.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "ATOM", "BUTTON", "RADIOBUTTON" ]
      },
/*
      "qxrad.components.ui.form.RadioGroup" :
      {
        category   : "form",
        name       : "RadioGroup",
        icon       : "qxrad/component/radiogroup.png",
        properties : [ "RADIOGROUP" ]
      },
*/
      "qxrad.components.ui.form.RepeatButton" :
      {
        category   : "form",
        name       : "RepeatButton",
        icon       : "qxrad/component/repeatbutton.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "ATOM", "BUTTON", "REPEATBUTTON" ]
      },

      "qxrad.components.ui.form.SelectBox" :
      {
        category   : "form",
        name       : "SelectBox",
        icon       : "qxrad/component/selectbox.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "ABSTRACT_SELECT_BOX", "SELECTBOX" ]
      },

      "qxrad.components.ui.form.Slider" :
      {
        category   : "form",
        name       : "Slider",
        icon       : "qxrad/component/slider.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "SLIDER" ]
      },

      "qxrad.components.ui.form.Spinner" :
      {
        category   : "form",
        name       : "Spinner",
        icon       : "qxrad/component/spinner.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "SPINNER" ]
      },

      "qxrad.components.ui.form.SplitButton" :
      {
        category   : "form",
        name       : "SplitButton",
        icon       : "qxrad/component/splitbutton.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "SPLITBUTTON" ]
      },

      "qxrad.components.ui.form.TextArea" :
      {
        category   : "form",
        name       : "TextArea",
        icon       : "qxrad/component/textarea.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "STANDARD", "ABSTRACTFIELD", "TEXTAREA" ]
      },

      "qxrad.components.ui.form.TextField" :
      {
        category   : "form",
        name       : "TextField",
        icon       : "qxrad/component/textfield.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "ABSTRACTFIELD", "TEXTFIELD" ]
      },

      "qxrad.components.ui.form.ToggleButton" :
      {
        category   : "form",
        name       : "ToggleButton",
        icon       : "qxrad/component/togglebutton.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "ATOM", "TOGGLEBUTTON" ]
      },

      "qxrad.components.ui.composite" :
      {
        category   : "container",
        name       : "Composite",
        icon       : "qxrad/component/composite.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "COMPOSITE" ]
      },

      "qxrad.components.ui.layout.Basic" :
      {
        category   : "layout",
        name       : "Basic",
        icon       : "qxrad/component/basic.png",
        properties : []
      },

      "qxrad.components.ui.layout.Canvas" :
      {
        category   : "layout",
        name       : "Canvas",
        icon       : "qxrad/component/canvas.png",
        properties : []
      },

      "qxrad.components.ui.layout.Dock" :
      {
        category   : "layout",
        name       : "Dock",
        icon       : "qxrad/component/dock.png",
        properties : []
      },

      "qxrad.components.ui.layout.Grid" :
      {
        category   : "layout",
        name       : "Grid",
        icon       : "qxrad/component/grid.png",
        properties : []
      },

      "qxrad.components.ui.layout.Grow" :
      {
        category   : "layout",
        name       : "Grow",
        icon       : "qxrad/component/grow.png",
        properties : []
      },

      "qxrad.components.ui.layout.HBox" :
      {
        category   : "layout",
        name       : "HBox",
        icon       : "qxrad/component/hbox.png",
        properties : []
      },

      "qxrad.components.ui.layout.VBox" :
      {
        category   : "layout",
        name       : "VBox",
        icon       : "qxrad/component/vbox.png",
        properties : []
      },

      "qxrad.components.ui.control.ColorSelector" :
      {
        category   : "control",
        name       : "ColorSelector",
        icon       : "qxrad/component/colorelector.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "COLOR_SELECTOR" ]
      },

      "qxrad.components.ui.control.DateChooser" :
      {
        category   : "control",
        name       : "DateChooser",
        icon       : "qxrad/component/datechooser.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "DATE_CHOOSER" ]
      },

      "qxrad.components.ui.groupbox.CheckGroupBox" :
      {
        category   : "groupbox",
        name       : "CheckGroupBox",
        icon       : "qxrad/component/checkgroupbox.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "GROUP_BOX" ]
      },
      "qxrad.components.ui.menubar.MenuBar" :
      {
        category   : "menubar",
        name       : "MenuBar",
        icon       : "qxrad/component/menubar.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "TOOLBAR" ]
      },
      "qxrad.components.ui.menubar.Button" :
      {
        category   : "menubar",
        name       : "Button",
        icon       : "qxrad/component/button.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "MENUBAR_BUTTON", "FORM_MENUBUTTON", "ATOM", "BUTTON" ]
      },
      "qxrad.components.ui.menu.Button" :
      {
        category   : "menu",
        name       : "Button",
        icon       : "qxrad/component/button.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "MENUBUTTON", "MENU_ABSTRACTBUTTON" ]
      },
      "qxrad.components.ui.menu.CheckBox" :
      {
        category   : "menu",
        name       : "CheckBox",
        icon       : "qxrad/component/checkbox.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "MENUCHECKBOX", "MENU_ABSTRACTBUTTON" ]
      },
      "qxrad.components.ui.menu.RadioButton" :
      {
        category   : "menu",
        name       : "RadioButton",
        icon       : "qxrad/component/radiobutton.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "MENURADIOBUTTON", "MENU_ABSTRACTBUTTON" ]
      },
      "qxrad.components.ui.menu.Separator" :
      {
        category   : "menu",
        name       : "Separator",
        icon       : "qxrad/component/separatormenuitem.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "SEPARATOR" ]
      },                  
      "qxrad.components.ui.menu.Menu" :
      {
        category   : "menu",
        name       : "Menu",
        icon       : "qxrad/component/menu.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "MENU" ]
      },
      "qxrad.components.ui.tree.Tree" :
      {
        category   : "tree",
        name       : "Tree",
        icon       : "qxrad/component/tree.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "TREE", "ABSTRACTSCROLLAREA" ]
      },
      "qxrad.components.ui.tree.TreeFolder" :
      {
        category   : "tree",
        name       : "TreeFolder",
        icon       : "qxrad/component/treefolder.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "ABSTRACTTREEITEM" ]
      },
      "qxrad.components.ui.tree.TreeFile" :
      {
        category   : "tree",
        name       : "TreeFile",
        icon       : "qxrad/component/treefile.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "ABSTRACTTREEITEM" ]
      },
      "qxrad.components.ui.toolbar.ToolBar" :
      {
        category   : "toolbar",
        name       : "ToolBar",
        icon       : "qxrad/component/toolbar/toolbar.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "TOOLBAR" ]
      },
      "qxrad.components.ui.toolbar.Button" :
      {
        category   : "toolbar",
        name       : "Button",
        icon       : "qxrad/component/toolbar/button.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "TOOLBAR_BUTON", "ATOM", "BUTTON" ]
      },
      "qxrad.components.ui.toolbar.CheckBox" :
      {
        category   : "toolbar",
        name       : "CheckBox",
        icon       : "qxrad/component/toolbar/checkbox.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "TOOLBAR_BUTON", "TOGGLEBUTTON" ]
      },
      "qxrad.components.ui.toolbar.MenuButton" :
      {
        category   : "toolbar",
        name       : "MenuButton",
        icon       : "qxrad/component/toolbar/menubutton.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "TOOLBAR_MENUBUTTON", "MENUBAR_BUTTON", "FORM_MENUBUTTON", "ATOM", "BUTTON" ]
      },
      "qxrad.components.ui.toolbar.Part" :
      {
        category   : "toolbar",
        name       : "Part",
        icon       : "qxrad/component/toolbar/part.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "TOOLBAR_PART" ]
      },
      "qxrad.components.ui.toolbar.RadioButton" :
      {
        category   : "toolbar",
        name       : "RadioButton",
        icon       : "qxrad/component/toolbar/radiobutton.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "TOOLBAR_RADIOBUTTON", "TOOLBAR_BUTON", "TOGGLEBUTTON", "ATOM" ]
      },
      "qxrad.components.ui.toolbar.Separator" :
      {
        category   : "toolbar",
        name       : "Separator",
        icon       : "qxrad/component/toolbar/separator.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "TOOLBAR_SEPARATOR" ]
      },
      "qxrad.components.ui.toolbar.SplitButton" :
      {
        category   : "toolbar",
        name       : "SplitButton",
        icon       : "qxrad/component/toolbar/splitbutton.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "TOOLBAR_SPLITBUTTON", "SPLITBUTTON" ]
      },
      "qxrad.components.ui.tabview.TabView" :
      {
        category   : "tabview",
        name       : "TabView",
        icon       : "qxrad/component/tabview/tabview.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "TABVIEW" ]
      },
      "qxrad.components.ui.tabview.Page" :
      {
        category   : "tabview",
        name       : "Page",
        icon       : "qxrad/component/tabview/page.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "TABVIEW_PAGE" , "LAYOUT" ]
      },
      "qxrad.components.ui.container.Composite" :
      {
        category   : "container",
        name       : "Composite",
        icon       : "qxrad/component/container/composite.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD","LAYOUT" ]
      },                                                                                                         
      "qxrad.components.ui.core.ScrollBar" :
      {
        category   : "core",
        name       : "ScrollBar",
        icon       : "qxrad/component/scrollbar.png",
        properties : [ "QX_GUI_BUILDER", "STANDARD", "CORE_SCROLLBAR" ]
      }
    },

	getAllComponents : function () {
		return this.__components;
	},

    __propertiesGroup :
    {
      "QX_GUI_BUILDER" :
      {
        name : "QX_GUI_BUILDER",

        properties :
        {
          "qxradID" :
          {
            type            : "qxradID",
            isDefinedByUser : true
          }
        }  
      },        	
      "STANDARD" :
      {
        name : "STANDARD",

        properties :
        {
          "top" :
          {
            type            : "layoutProperty",
            nullable        : true,
            isDefinedByUser : true,
            event           : "changeTop"
          },

          "left" :
          {
            type            : "layoutProperty",
            nullable        : true,
            isDefinedByUser : true,
            event           : "changeLeft"
          },

          "width" :
          {
            type            : "integer",
            nullable        : true,
            isDefinedByUser : false,
            event           : "changeWidth"
          },

          "height" :
          {
            type            : "integer",
            nullable        : true,
            isDefinedByUser : false,
            event           : "changeHeight"
          }
        }
      },
	  "LAYOUT_BASIC" :
	  {
	  	name : "BASIC",
	  	properties :
	  	{

	  	}	  	
	  },
	  "LAYOUT_ATOM" :
	  {
	  	name : "ATOM",
	  	properties :
	  	{
          "center" : { type : "boolean" },
          "gap" : { type : "integer" },
          "iconPosition" :
          {
            type   : "enum",
            values : [ "top", "right", "bottom", "left" ]
          }
	  	}	  	
	  },
	  "LAYOUT_CANVAS" :
	  {
	  	name : "CANVAS",
	  	properties :
	  	{

	  	}	  	
	  },
	  "LAYOUT_DOCK" :
	  {
	  	name : "DOCK",
	  	properties :
	  	{

	  	}	  	
	  },
	  "LAYOUT_GRID" :
	  {
	  	name : "GRID",
	  	properties :
	  	{

	  	}	  	
	  },
	  "LAYOUT_GROW" :
	  {
	  	name : "GROW",
	  	properties :
	  	{

	  	}	  	
	  },
	  "LAYOUT_HBOX" :
	  {
	  	name : "HBOX",
	  	properties :
	  	{
			"alignX" : {
				type : "enum",
				values : ["left", "center", "right"]
			},
			"alignY" : {
				type : "enum",
				values : ["top", "middle", "bottom", "baseline"]
			},			
			"reversed" : { type : "boolean" },
			"separator" : { type : "decorator" },
			"spacing" : { type : "integer" }
	  	}	  	
	  },
	  "LAYOUT_VBOX" :
	  {
	  	name : "VBOX",
	  	properties :
	  	{
			"alignX" : {
				type : "enum",
				values : ["left", "center", "right", "baseline"]
			},
			"alignY" : {
				type : "enum",
				values : ["top", "middle", "bottom"]
			},			
			"reversed" : { type : "boolean" },
			"separator" : { type : "decorator" },
			"spacing" : { type : "integer" }
	  	}	  	
	  },  	  	  	  	  	    	    	        
	  "LAYOUT" :
	  {
	  	name : "LAYOUT",
	  	properties :
	  	{
	  		"layout" : 
	  		{
	  			type : "layout",
	  			values : [ "Atom", "Basic", "Canvas", "Dock","Grid","Grow","HBox","VBox" ]
	  		}
	  	}
	  	
	  },
      "ATOM" :
      {
        name : "ATOM",

        properties :
        {
          "label" :
          {
            type     : "string",
            nullable : true,
            argNum   : 0
          },

          "center" : { type : "boolean" },
          "gap" : { type : "integer" },

          "icon" :
          {
            type     : "string",
            nullable : true,
            argNum   : 1
          },

          "iconPosition" :
          {
            type   : "enum",
            values : [ "top", "right", "bottom", "left" ]
          },

          "rich" :
          {
            type             : "boolean",
            applyDirectly : false
          },

          "show" :
          {
            type   : "enum",
            values : [ "both", "label", "icon" ]
          }
        }
      },

      "IMAGE" :
      {
        name : "IMAGE",

        properties :
        {
          "source" :
          {
            type     : "string",
            nullable : true,
            argNum   : 0
          },

          "allowGrowX" : { type : "boolean" },
          "allowGrowY" : { type : "boolean" },
          "allowShrinkX" : { type : "boolean" },
          "allowShrinkY" : { type : "boolean" },
          "scale" : { type : "boolean" }
        }
      },

      "LABEL" :
      {
        name : "LABEL",

        properties :
        {
          "content" :
          {
            type   : "string",
            argNum : 0
          },

          "allowGrowX" : { type : "boolean" },
          "allowGrowY" : { type : "boolean" },

          "rich" :
          {
            type             : "boolean",
            applyDirectly : false
          },

          "textAlign" :
          {
            type     : "enum",
            values   : [ "left", "center", "right" ],
            nullable : true
          }
        }
      },

      "BUTTON" :
      {
        name : "BUTTON",

        properties :
        {
          "command" :
          {
            type     : "command",
            nullable : true
          },

          "focusable" : { type : "boolean" },

          "name" :
          {
            type     : "string",
            nullable : true
          },

          "value" :
          {
            type     : "string",
            nullable : true
          }
        }
      },

      "CHECKBOX-2" :
      {
        name : "CHECKBOX-2",

        properties :
        {
          "label" :
          {
            type     : "string",
            nullable : true,
            argNum   : 0
          },

          "allowGrowX" : { type : "boolean" }
        }
      },

      "ABSTRACT_SELECT_BOX" :
      {
        name : "ABSTRACT SELECT BOX",

        properties :
        {
          "focusable" : { type : "boolean" },
          "maxListHeight" : { type : "integer" },

          "name" :
          {
            type     : "string",
            nullable : true
          }
        }
      },

      "DATEFIELD" :
      {
        name : "DATE FIELD",

        properties :
        {
          "dateFormat" : { type : "dateFormat" },
          "date"       : { type : "date" }
        }
      },

      "LIST" :
      {
        name : "LIST",

        properties :
        {
          "orientation" :
          {
            type          : "enum",
            values        : [ "horizontal", "vertical" ],
            isOrientation : true,
            argNum        : 0
          },

          "dragSelection" :
          {
            type             : "boolean",
            applyDirectly : false
          },

          "enableInlineFind" :
          {
            type             : "boolean",
            applyDirectly : false
          },

          "focusable" :
          {
            type             : "boolean",
            applyDirectly : false
          },

          "name" :
          {
            type     : "string",
            nullable : true
          },

          "orientation" :
          {
            type   : "enum",
            values : [ "horizontal", "vertical" ]
          },

          "quickSelection" :
          {
            type             : "boolean",
            applyDirectly : false
          },

          "selectionMode" :
          {
            type   : "enum",
            values : [ "single", "multi", "additive", "one" ]
          },

          "spacing" : { type : "integer" }
        }
      },

      "LISTITEM" :
      {
        name : "LIST ITEM",

        properties :
        {
          "manager" : { type : "radiogroup" },

          "value" :
          {
            type     : "string",
            nullable : true,
            argNum   : 2
          }
        }
      },

      "RADIOBUTTON" :
      {
        name : "RADIO BUTTON",

        properties :
        {
          "allowGrowX" : { type : "boolean" },
          "checked" : { type : "boolean" },

          "group" :
          {
            type     : "radiogroup",
            nullable : true
          }
        }
      },

      "RADIOGROUP" :
      {
        name : "RADIO GROUP",

        properties :
        {
          "enabled" :
          {
            type     : "boolean",
            nullable : true
          },

          "name" :
          {
            type     : "string",
            nullable : true
          },

          "selected" :
          {
            type     : "IRadioItem",
            nullable : true
          },

          "wrap" : { type : "boolean" }
        }
      },

      "REPEATBUTTON" :
      {
        name : "REPEAT BUTTON",

        properties :
        {
          "firstInterval" : { type : "integer" },
          "interval"      : { type : "integer" },
          "minTimer"      : { type : "integer" },
          "timerDecrease" : { type : "integer" }
        }
      },

      "SELECTBOX" :
      {
        name       : "SELECT BOX",
        properties : {}
      },

      // "selected" : {type : "listitem"}	    		
      "SLIDER" :
      {
        name : "SLIDER",

        properties :
        {
          "focusable" :
          {
            type             : "boolean",
            applyDirectly : false
          },

          /*
          	    		"orientation" : {type : "enum", values: [ "horizontal", "vertical" ], isOrientation : true, argNum : 0	
          	    		},
          */

          "knobFactor" :
          {
            type     : "number",
            nullable : true
          },

          "maximum" : { type : "integer" },
          "minimum" : { type : "integer" },

          "name" :
          {
            type     : "string",
            nullable : true
          },

          "orientation" :
          {
            type   : "enum",
            values : [ "horizontal", "vertical" ]
          },

          "pageStep" : { type : "integer" },
          "singleStep" : { type : "integer" },
          "value" : { type : "integer" }
        }
      },

      "SPINNER" :
      {
        name : "SPINNER",

        properties :
        {
          "allowShrinkY" : { type : "boolean" },

          /*
          		      "contentPadding": {type: "contentpadding"},
          		      "contentPaddingBottom": {type: "integer"},
          		      "contentPaddingLeft": {type: "integer"},
          		      "contentPaddingRight": {type: "integer"},
          		      "contentPaddingTop": {type: "integer"},
          */

          "editable" : { type : "boolean" },
          "focusable" : { type : "boolean" },

          "max" :
          {
            type   : "number",
            argNum : 0
          },

          "min" :
          {
            type   : "number",
            argNum : 2
          },

          "name" :
          {
            type     : "string",
            nullable : false
          },

          "numberFormat" : { type : "numberformat" },
          "pageStep" : { type : "number" },
          "singleStep" : { type : "number" },

          "value" :
          {
            type            : "integer",
            withInteraction : "changeValue"
          },

          "wrap" : { type : "boolean" }
        }
      },

      "SPLITBUTTON" :
      {
        name : "SPLIT BUTTON",

        properties :
        {
          "command" :
          {
            type     : "command",
            nullable : true,
            argNum   : 3
          },

          "focusable" : { type : "boolean" },

          "icon" :
          {
            type     : "string",
            nullable : true,
            argNum   : 1
          },

          "label" :
          {
            type     : "string",
            nullable : true,
            argNum   : 0
          },

          "menu" :
          {
            type     : "menu",
            nullable : true,
            argNum   : 2
          },

          "gap" : { type : "integer" },

          "name" :
          {
            type     : "string",
            nullable : true
          },

          "show" :
          {
            type   : "enum",
            values : [ "both", "label", "icon" ]
          },

          "value" :
          {
            type     : "string",
            nullable : true
          }
        }
      },

      "ABSTRACTFIELD" :
      {
        name : "ABSTRACTFIELD",

        properties :
        {
          "value" :
          {
            type   : "string",
            argNum : 0,
            event  : "changeValue"
          },

          "focusable" : { type : "boolean" },

          "name" :
          {
            type     : "string",
            nullable : true
          },

          "readOnly" : { type : "boolean" },
          "selectable" : { type : "boolean" },

          "textAlign" :
          {
            type     : "enum",
            values   : [ "left", "center", "right" ],
            nullable : true
          }
        }
      },

      "TEXTAREA" :
      {
        name       : "TEXT AREA",
        properties : { "wrap" : { type : "boolean" } }
      },

      "TEXTFIELD" :
      {
        name : "TEXT FIELD",

        properties :
        {
          "allowGrowX" : { type : "boolean" },
          "allowShrinkY" : { type : "boolean" },

          "maxLength" :
          {
            type     : "integer",
            nullable : true
          }
        }
      },

      "TOGGLEBUTTON" :
      {
        name : "TOGGLE BUTTON",

        properties :
        {
          "checked" : { type : "boolean" },
          "focusable" : { type : "boolean" },

          "name" :
          {
            type     : "string",
            nullable : true
          },

          "value" :
          {
            type     : "string",
            nullable : true
          }
        }
      },

      "COMPOSITE" :
      {
        name : "COMPOSITE",

        properties :
        {
          "layout" :
          {
            type : "layout",

            values : [ "HBox", "VBox", "Grow", "Dock", "Basic", "Canvas", "Atom", "Grid" ],

            isDefinedByUser : true
          }
        }
      },

      "DOCK" :
      {
        name : "DOCK",

        properties :
        {
          "edge" :
          {
            type   : "layoutProperty",
            values : [ "north", "east", "south", "west", "center" ]
          }
        }
      },

      "COLOR_SELECTOR" :
      {
        name : "COLOR_SELECTOR",

        properties :
        {
          "blue" :
          {
            type   : "integer"
          },
          "green" :
          {
            type   : "integer"
          },
          "red" :
          {
            type   : "integer"
          },          
          "brightness" :
          {
            type   : "number"
          },          
          "hue" :
          {
            type   : "number"
          },          
          "saturation" :
          {
            type   : "number"
          }          
        }
      },

      "DATE_CHOOSER" :
      {
        name : "DATE_CHOOSER",

        properties :
        {
          "command" :
          {
            type   : "command",
            nullable : true          
          },
          "date" :
          {
            type   : "date",
            nullable : true          
          },
          "height" :
          {
            type   : "integer"          
          },
          "width" :
          {
            type   : "integer"          
          },          
          "name" :
          {
            type   : "string",
            nullable : true          
          },
          "shownMonth" :
          {
            type   : "integer",
            nullable : true          
          },
          "shownYear" :
          {
            type   : "integer",
            nullable : true          
          }          
        }
      },

      "GROUP_BOX" :
      {
        name : "GROUP_BOX",

        properties :
        {
          "contentPaddingBottom" :
          {
            type   : "integer"
          },
          "contentPaddingLeft" :
          {
            type   : "integer"
          },
          "contentPaddingRight" :
          {
            type   : "integer"
          },
          "contentPaddingTop" :
          {
            type   : "integer"
          },
          "legendPosition" :
          {
            type   : "enum",
            values : ["top", "middle"]
          }          
        }
      },
      
      "TOOLBAR-2" :
      {
        name : "TOOLBAR-2",

        properties :
        {
          "openMenu" :
          {
            type   : "menu",
            nullable : true
          },
          "show" :
          {
            type   : "enum",
            values : ["both", "label", "icon"]
          },
          "spacing" :
          {
            type   : "integer",
            nullable : true
          }                    
        }
      },
 
       "MENUBAR_BUTTON" :
      {
        name : "MENUBAR_BUTTON",

        properties :
        {
          "focusable" :
          {
            type   : "boolean"
          },
          "show" :
          {
            type   : "enum",
            values : ["inherit", "both", "text", "icon"]
          }
        }
      },
           
      "FORM_MENUBUTTON" :
      {
        name : "FORM_MENUBUTTON",

        properties :
        {
          "menu" :
          {
            type   : "menu",
            nullable : true
          }
        }
      },
      
      "MENUBUTTON" :
      {
        name : "MENUBUTTON",

        properties :
        {
          "command" :
          {
            type   : "command"
          }
        }
      },
            
      "MENU_ABSTRACTBUTTON" :
      {
        name : "MENU_ABSTRACTBUTTON",

        properties :
        {
          "icon" :
          {
            type   : "string",
            nullable : true
          },
          "label" :
          {
            type   : "string",
            nullable : true
          },
          "menu" :
          {
            type   : "menu",
            nullable : true
          }                    
        }
      },      
                  
      "CHECKBOX" :
      {
        name : "CHECKBOX",

        properties :
        {
          "checked" :
          {
            type   : "boolean"
          },
          "name" :
          {
            type   : "string",
            nullable : true
          },
          "value" :
          {
            type   : "string",
            nullable : true
          }
        }
      },      
                  
      "MENURADIOBUTTON" :
      {
        name : "MENURADIOBUTTON",

        properties :
        {
          "checked" :
          {
            type   : "boolean"
          },
          "group" :
          {
            type   : "radiogroup",
            nullable : true
          },          
          "name" :
          {
            type   : "string",
            nullable : true
          },
          "value" :
          {
            type   : "string",
            nullable : true
          }
        }
      },      

      "SEPARATOR" :
      {
        name : "SEPARATOR",

        properties :
        {
          "anonymous" :
          {
            type   : "boolean"
          }
        }
      },      
      
      "MENU" :
      {
        name : "MENU",

        properties :
        {
          "allowGrowX" :
          {
            type   : "boolean"
          },
          "allowGrowY" :
          {
            type   : "boolean"
          },
          "arrowColumnWidth" :
          {
            type   : "integer"
          },
          "closeInterval" :
          {
            type   : "integer"
          },
          "closeInterval" :
          {
            type   : "integer"
          },
          "domMove" :
          {
            type   : "boolean"
          },
          "iconColumnWidth" :
          {
            type   : "integer"
          },
          "keepActive" :
          {
            type   : "boolean"
          },
          "keepFocus" :
          {
            type   : "boolean"
          },
          "offsetBottom" :
          {
            type   : "integer"
          },
          "offsetLeft" :
          {
            type   : "integer"
          },
          "offsetRight" :
          {
            type   : "integer"
          },
          "offsetTop" :
          {
            type   : "integer"
          },
          "openedButton" :
          {
            type   : "widget",
            nullable : true
          },
          "opener" :
          {
            type   : "widget",
            nullable : true
          },
          "openInterval" :
          {
            type   : "integer"
          },
          "position" :
          {
            type   : "enum",
            values : ["top-left", "top-right", "bottom-left", "bottom-right", "left-top", "left-bottom", "right-top", "right-bottom"]
          },
          "openedButton" :
          {
            type   : "widget",
            nullable : true
          },
          "smart" :
          {
            type   : "boolean"
          },
          "spacingX" :
          {
            type   : "integer"
          },
          "spacingY" :
          {
            type   : "integer"
          },
          "visibility" :
          {
            type   : "enum",
            values : ["visible", "hidden" , "excluded"]
          }          
        }
      },      
            
      "TREE" :
      {
        name : "TREE",

        properties :
        {
          "contentPaddingBottom" :
          {
            type   : "integer"
          },
          "contentPaddingLeft" :
          {
            type   : "integer"
          },
          "contentPaddingRight" :
          {
            type   : "integer"
          },
          "contentPaddingTop" :
          {
            type   : "integer"
          },
          "dragSelection" :
          {
            type   : "boolean"
          },
          "focusable" :
          {
            type   : "boolean"
          },
          "hideRoot" :
          {
            type   : "boolean"
          },
          "openMode" :
          {
            type   : "enum",
            values : ["click", "dblclick", "none"]
          },
          "quickSelection" :
          {
            type   : "boolean"
          },
          "root" :
          {
            type   : "abstracttreeitem",
            nullable : true
          },
          "rootOpenClose" :
          {
            type   : "boolean"
          },
          "selectionMode" :
          {
            type   : "enum",
            values : ["single", "multi", "additive", "one"]
          }
                    
        }
      },      
                  
      "ABSTRACTSCROLLAREA" :
      {
        name : "ABSTRACTSCROLLAREA",

        properties :
        {
          "height" :
          {
            type   : "integer"
          },
          "width" :
          {
            type   : "integer"
          },
          "scrollbarX" :
          {
            type   : "enum",
            values : ["auto", "on", "off"]
          },
          "scrollbarY" :
          {
            type   : "enum",
            values : ["auto", "on", "off"]
          }          
        }
      },      
                        
      "ABSTRACTTREEITEM" :
      {
        name : "ABSTRACTTREEITEM",

        properties :
        {
          "icon" :
          {
            type   : "string",
            nullable : true
          },
          "indent" :
          {
            type   : "integer"
          },
          "label" :
          {
            type   : "string"
          },
          "open" :
          {
            type   : "boolean"
          },
          "openSymbolMode" :
          {
            type   : "enum",
            values : ["always", "never", "auto"]
          },
          "parent" :
          {
            type   : "abstracttreeitem",
            nullable : true
          }          
        }
      },      
 
       "TOOLBAR" :
      {
        name : "TOOLBAR",

        properties :
        {
          "openMenu" :
          {
            type   : "menu",
            nullable : true
          },
          "show" :
          {
            type   : "enum",
            values : ["both", "label", "icon"]
          },
          "spacing" :
          {
            type   : "integer",
            nullable : true
          }                    
        }
      }, 

       "TOOLBAR_BUTON" :
      {
        name : "TOOLBAR_BUTON",

        properties :
        {
          "focusable" :
          {
            type   : "boolean"
          },
          "show" :
          {
            type   : "enum",
            values : ["inherit", "both", "text", "icon"]
          }
        }
      }, 

      "TOOLBAR_MENUBUTTON" :
      {
        name : "TOOLBAR_MENUBUTTON",

        properties :
        {
          "showArrow" :
          {
            type   : "boolean"
          }
        }
      },

       "TOOLBAR_PART" :
      {
        name : "TOOLBAR_PART",

        properties :
        {
          "show" :
          {
            type   : "enum",
            values : ["both", "label", "icon"]
          },
          "spacing" :
          {
            type   : "integer",
            nullable : true
          }          
        }
      },
 
      "TOOLBAR_RADIOBUTTON" :
      {
        name : "TOOLBAR_RADIOBUTTON",

        properties :
        {
          "group" :
          {
            type   : "radiogroup",
            nullable : true
          }
        }
      }, 

      "TOOLBAR_SEPARATOR" :
      {
        name : "TOOLBAR_SEPARATOR",

        properties :
        {
          "height" :
          {
            type   : "integer"
          },
          "width" :
          {
            type   : "integer"
          }          
        }
      }, 

      "TOOLBAR_SPLITBUTTON" :
      {
        name : "TOOLBAR_SPLITBUTTON",

        properties :
        {
          "focusable" :
          {
            type   : "boolean"
          }
        }
      },

      "TABVIEW" :
      {
        name : "TABVIEW",

        properties :
        {
          "contentPaddingBottom" :
          {
            type   : "integer"
          },
          "contentPaddingLeft" :
          {
            type   : "integer"
          },
          "contentPaddingRight" :
          {
            type   : "integer"
          },
          "contentPaddingTop" :
          {
            type   : "integer"
          },
          "selected" : {
          	type : "qx.ui.tabview.Page",
          	nullable : true
          }
        }
      },

      "TABVIEW_PAGE" :
      {
        name : "TABVIEW_PAGE",

        properties :
        {
          "icon" :
          {
            type   : "string"
          },
          "label" :
          {
            type   : "string"
          }          
        }
      }, 

      "XXXXXXX" :
      {
        name : "XXXXXXX",

        properties :
        {
          "xxx" :
          {
            type   : "xxxxx"
          }
        }
      },
                              
      "CORE_SCROLLBAR" :
      {
        name : "CORE_SCROLLBAR",

        properties :
        {
          "knobFactor" :
          {
            type   : "positivenumber",
            nullable : true
          },
          "maximum" :
          {
            type   : "positiveinteger"
          },
          "orientation" :
          {
            type   : "enum",
            values : ["horizontal", "vertical"]
          },
          "position" :
          {
            type   : "integer"
          },
          "pageStep" :
          {
            type   : "integer"
          },
          "singleStep" :
          {
            type   : "integer"
          }                     
        }
      },      
      
      "WIDGET" :
      {
        name : "WIDGET",

        properties :
        {
          "minWidth" :
          {
            type     : "integer",
            nullable : true
          },

          "minHeight" :
          {
            type     : "integer",
            nullable : true
          },

          "maxWidth" :
          {
            type     : "integer",
            nullable : true
          },

          "maxHeight" :
          {
            type     : "integer",
            nullable : true
          },

          "allowGrowX" :
          {
            type     : "boolean",
            nullable : false
          },

          "allowGrowY" :
          {
            type     : "boolean",
            nullable : false
          },

          "allowShrinkX" :
          {
            type     : "boolean",
            nullable : false
          },

          "allowShrinkY" :
          {
            type     : "boolean",
            nullable : false
          },

          "marginTop" :
          {
            type     : "integer",
            min      : -1000,
            nullable : false
          },

          "marginRight" :
          {
            type     : "integer",
            min      : -1000,
            nullable : false
          },

          "marginBottom" :
          {
            type     : "integer",
            min      : -1000,
            nullable : false
          },

          "marginLeft" :
          {
            type     : "integer",
            min      : -1000,
            nullable : false
          },

          "paddingTop" :
          {
            type     : "integer",
            nullable : false
          },

          "paddingRight" :
          {
            type     : "integer",
            nullable : false
          },

          "paddingBottom" :
          {
            type     : "integer",
            nullable : false
          },

          "paddingLeft" :
          {
            type     : "integer",
            nullable : false
          },

          "alignX" :
          {
            type     : "enum",
            values   : [ "left", "center", "right" ],
            nullable : true
          },

          "alignY" :
          {
            type     : "enum",
            values   : [ "top", "middle", "bottom", "baseline" ],
            nullable : true
          }
        }
      }
    },
	
	getComponentGroups : function (clazz) {
		
		return this.__components[clazz].properties;
	},
	getIconComponent : function (clazz) {
		
		return this.__components[clazz].icon || null;
	},	
    getAllGroups : function() {
      return this.__propertiesGroup;
    },
    getGroup : function(name) {
      return this.__propertiesGroup[name] || null;
    }        
    
    
  }
});
