/*
 Author: Ed Gonzalez
	Free for personal and commercial use under the CCA 3.0 license
	I just ask for you give me credit for the code and tell your friends about it.

	Note this is a very simple implementation, and is only meant to get you started using Custom Controls, and the MapBox API
*/

//Step 1 Add reference tp MapBox API, and to jQuery API, then add variables to be used 
//Step 2 Add Initialize Code and set up default map.  Make sure to add Map Token Key
//Step 2a Make some minor adjustments to default map, and setup Bounds Variable
//Step 3 Get and Manipulate data in SetData Function
//Step 4 Draw points on map 


define(["https://api.tiles.mapbox.com/mapbox-gl-js/v0.29.0/mapbox-gl.js", "jquery"], function(mapboxgl, jQuery) {
    "use strict";
    var map = '',
        bounds = '',
        geojsonFeature = {};

    function BasicControl() {};



    BasicControl.prototype.initialize = function(oControlHost, fnDoneInitializing, oDataStore) {
        console.log('1. init ******************')
        jQuery("head link[rel='stylesheet']").last().after("<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.34.0/mapbox-gl.css' rel='stylesheet' />");


        var mapContainer = oControlHost.container.id;

        //*** Step 2a make some minor adjustments to default map */
        mapboxgl.accessToken = ''; //Make sure to add Map Token Key
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

        console.log('3. Draw ******************')

        map.on("load", function() {
            map.addSource("points", {
                "type": "geojson",
                "data": geojsonFeature
            });


            map.addLayer({
                "id": "points",
                "type": "circle",
                "source": "points",
                "paint": {
                    'circle-radius': {
                        'base': 3,
                        'stops': [
                            [10, 3],
                            [13, 7]
                        ]

                    },
                    "circle-color": "#B42222"
                },
                "filter": ["==", "$type", "Point"],

            });
        });



    };


    BasicControl.prototype.setData = function(oControlHost, oDataStore) {
        console.log('2 Set Data')
            //Default GeoJSON
        geojsonFeature = {
            "type": "FeatureCollection",
            "features": []
        }

        var iRowCount = oDataStore.rowCount;
        for (var iRow = 0; iRow < iRowCount; iRow++) {

            var feature = {}
            feature['type'] = 'Feature'
            feature['geometry'] = {
                'type': 'Point',
                'coordinates': [parseFloat(oDataStore.getCellValue(iRow, 1)), parseFloat(oDataStore.getCellValue(iRow, 2))],
            }
            feature['properties'] = { 'name': oDataStore.getCellValue(iRow, 0) }
            geojsonFeature['features'].push(feature)
        }

        console.log(geojsonFeature)

    };



    return BasicControl;
});