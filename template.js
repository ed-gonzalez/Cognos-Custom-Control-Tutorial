 /*
   Author: Ed Gonzalez
  	Free for personal and commercial use under the CCA 3.0 license
  	I just ask for you give me credit for the code and tell your friends about it.

  	Note this is a very simple implementation, and is only meant to get you started using Custom Controls, and the MapBox API
  */

 // Simple Template with control and 3 basic methods (functions)
 define(["jquery"], function(jQuery) {
     "use strict";

     //2. Create and Name Control
     function BasicControl() {};

     //3. Add Initialize method to Control
     BasicControl.prototype.initialize = function(oControlHost, fnDoneInitializing) {
         console.log('1. Hello init ******************')
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