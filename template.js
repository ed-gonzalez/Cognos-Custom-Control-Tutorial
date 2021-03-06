/*
 Author: 
 Ed Gonzalez  
 edgonzalez@icdata.io
 www.icdata.io 
 www.linkedin.com/in/ed-gonzalez-9683696
 
	Free for personal and commercial use under the CCA 3.0 license
	I just ask for you give me credit for the code and tell your friends about it.

	Note this is a very simple implementation, and is only meant to get you started using Custom Controls, and the MapBox API
*/

//1. Define Require Module
define(["jquery"], function(jQuery) {
    "use strict";

    //2. Create and Name Control
    function BasicControl() {};

    //3. Add Initialize method to Control
    BasicControl.prototype.initialize = function(oControlHost, fnDoneInitializing) {
        console.log('1. Hello init ******************')
        console.log(requirejs.s.contexts._.config)
        fnDoneInitializing();
    };

    //4. Add SetData method to control
    BasicControl.prototype.setData = function(oControlHost, oDataStore) {
        console.log('2. SetData *****************')
    };

    //5. Add SetData method to control
    BasicControl.prototype.draw = function(oControlHost) {
        oControlHost.container.innerHTML = "Hello World!!  Map PlaceHolder";
        console.log('3. Draw ******************')
    };

    //6. Return new Control 
    return BasicControl;
});