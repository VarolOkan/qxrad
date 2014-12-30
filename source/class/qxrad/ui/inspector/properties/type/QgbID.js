/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.ui.inspector.properties.type.QgbID",
{
  extend : qxrad.ui.inspector.properties.type.String,

  construct : function(group,property) {
    this.base(arguments,group,property);

  },

  properties :
  {
  },

  members :
  {
    setQgbProperty : function(value)
    {
      var component = this._component;
      if (component == null) {
      	return false;
      }      
      var name = this.getName();
	  var oldValue = this.getQgbProperty();
	  
      var setter = "set" + qx.lang.String.firstUp(name);
      component[setter](value);

      var msg = new qx.event.message.Message("changeQgbID",
      {
        qxradID    : value,
        oldQgbID : oldValue
      });

      qx.event.message.Bus.dispatch(msg);      
     
      return true;
    }
  }
});