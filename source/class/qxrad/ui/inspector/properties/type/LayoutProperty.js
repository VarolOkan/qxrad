/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.ui.inspector.properties.type.LayoutProperty",
{
  extend : qxrad.ui.inspector.properties.type.Integer,

  construct : function(group,property) {
    this.base(arguments,group,property);

  },

  properties :
  {
  },

  members :
  {
    getQxradProperty : function()
    {
      var component = this._component;
      if (component == null) {
      	return null;
      }
      var name = this.getName();
      return component.getLayoutProperties()[name] || null;
    },
    setQxradProperty : function(value)
    {
      var component = this._component;
      if (component == null) {
      	return false;
      }
            
      var name = this.getName();
      var props = {};
      props[name] = value;
      component.setLayoutProperties(props);
      component.setUserDefinedProperties(this.getGroup(),name,value);
     return true;
    }
  }
});