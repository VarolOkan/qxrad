/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define("qxrad.theme.Appearance",
{
  extend : qx.theme.modern.Appearance,

  appearances :
  {
    "NotImplemented"                        : "widget",
    "NotImplemented/label"                  : "label",
    "NotImplemented/nullable"               : "widget",
    "NotImplemented/type"                   : "label",
    "propertyString"                        : "widget",
    "propertyString/label"                  : {
    	alias : "label",
		style : function(states)
		{
			return {
				textColor : states.disabled ? "text-disabled" : "white"
			};
		}    	
    },
    "propertyString/nullable"               : "checkbox",
    "propertyString/type"                   : "textfield",
    "propertyInteger"                       : "widget",
    "propertyInteger/label"                 : "label",
    "propertyInteger/nullable"              : "checkbox",
    "propertyInteger/type"                  : "spinner",
    "propertyEnum"                          : "widget",
    "propertyEnum/label"                    : "label",
    "propertyEnum/nullable"                 : "checkbox",
    "propertyEnum/type"                     : "combobox",
    "propertyBoolean"                       : "widget",
    "propertyBoolean/label"                 : "label",
    "propertyBoolean/nullable"              : "checkbox",
    "propertyBoolean/type"                  : "checkbox",
    "propertyDate"                          : "widget",
    "propertyDate/label"                    : "label",
    "propertyDate/nullable"                 : "checkbox",
    "propertyDate/type"                     : "checkbox",
    "propertyLayoutProperty"                : "widget",
    "propertyLayoutProperty/label"          : "label",
    "propertyLayoutProperty/nullable"       : "checkbox",
    "propertyLayoutProperty/type"           : "spinner",
    "propertyLayoutProperty/type/button"    : "combobox/button",
    "propertyLayoutProperty/type/list"      : "list",
    "propertyLayoutProperty/type/list/pane" : "list/pane",
    "propertyLayoutProperty/type/popup"     : "popup"
  }
});