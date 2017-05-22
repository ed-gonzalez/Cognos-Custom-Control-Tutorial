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

//Step 1 Add reference tp MapBox API, and to jQuery API, then add variables to be used 
//Step 2 Add Variables, Initialize Code and set up default map.  Make sure to add Map Token Key


define(["https://api.tiles.mapbox.com/mapbox-gl-js/v0.29.0/mapbox-gl.js", "jquery"], function(mapboxgl, jQuery) {
    "use strict";
    var map = '',
        bounds = '',
        geojsonFeature = {};

    function BasicControl() {};


    //Step 2 Add Initialize Code
    BasicControl.prototype.initialize = function(oControlHost, fnDoneInitializing, oDataStore) {
        // Add Link to MapBox Stylesheet
        jQuery("head link[rel='stylesheet']").last().after("<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.34.0/mapbox-gl.css' rel='stylesheet' />");

        // Get Id of Control container
        var mapContainer = oControlHost.container.id;

        //Add Default map Definition
        mapboxgl.accessToken = ''; // Add Map Token Key here
        map = new mapboxgl.Map({
            container: mapContainer, // container id
            style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
            center: [-74.50, 40], // starting position
            zoom: 9 // starting zoom
        });

        //Tell Cognos that we are done initializing 
        fnDoneInitializing();

    };


    BasicControl.prototype.draw = function(oControlHost) {

        console.log('Draw ******************')

    };


    BasicControl.prototype.setData = function(oControlHost, oDataStore) {

        console.log('SetData *****************')

    };


    return BasicControl;
});