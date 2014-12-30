/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Class.define("qxrad.components.ui.basic.Atom",
{
  extend : qx.ui.basic.Atom,

  include : [ qxrad.components.MProperties],



  /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

  construct : function(label, icon)
  {
    this.base(arguments, label, icon);
	qx.event.Registration.removeAllListeners(this);
    this.setLabel("Atom");
	this.addListener("appear", function (e) {
		this.setUserDefinedProperties("ATOM","label","\"Atom\"");
	});    
	
       
  }
});