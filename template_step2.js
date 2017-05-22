//Step 1 Add reference tp MapBox API, and to jQuery API, then add variables to be used 
//Step 2 Add Variables, Initialize Code and set up default map.  Make sure to add Map Token Key


define(["mapboxgl", "jquery"], function(mapboxgl, jQuery) {
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