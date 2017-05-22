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
//Step 2 Add Initialize Code and set up default map. Make sure to add Map Token Key
//Step 2a Make some minor adjustments to default map, and setup Bounds Variable


define(["https://api.tiles.mapbox.com/mapbox-gl-js/v0.29.0/mapbox-gl.js", "jquery"], function(mapboxgl, jQuery) {
    "use strict";

    var map = '',
        bounds = '',
        geojsonFeature = {};

    function BasicControl() {};

    prototype.mytest = function() {


    }

    BasicControl.prototype.initialize = function(oControlHost, fnDoneInitializing) {

        jQuery("head link[rel='stylesheet']").last().after("<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.34.0/mapbox-gl.css' rel='stylesheet' />");


        var mapContainer = oControlHost.container.id;

        //*** Step 2a make some minor adjustments to default map */
        mapboxgl.accessToken = // Map token Key
            map = new mapboxgl.Map({
                container: mapContainer,
                style: 'mapbox://styles/mapbox/streets-v9',
                center: [-96, 37.8], //Update Map Center to mid US
                zoom: 3, //Change Default Zoom
                interactive: true //Set Interactive to true
            });

        //Set up the Bounds variable
        bounds = new mapboxgl.LngLatBounds();

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