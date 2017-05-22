//Step 1 Add reference tp MapBox API, and to jQuery API, then add variables to be used 

define(["https://api.tiles.mapbox.com/mapbox-gl-js/v0.29.0/mapbox-gl.js", "jquery"], function(mapboxgl, jQuery) {
    //Add Variables
    "use strict";

    function BasicControl() {};

    BasicControl.prototype.initialize = function(oControlHost, fnDoneInitializing, oDataStore) {
        console.log('1. init ******************')

        fnDoneInitializing();
    };


    BasicControl.prototype.draw = function(oControlHost) {
        oControlHost.container.innerHTML = "Hello World!!  Map PlaceHolder";
        console.log('3. Draw ******************')

    };


    BasicControl.prototype.setData = function(oControlHost, oDataStore) {

        console.log('2. SetData *****************')

    };


    return BasicControl;
});