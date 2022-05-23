// add console.log to see if our code is working
console.log("working");

// we create the tile layer that will be the background of our layer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: accessToken
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: accessToken
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};
// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

//grabbing json data from github
// let airportData = "https://raw.githubusercontent.com/aKnownSaltMine/Mapping_Earthquakes/main/majorAirports.json";

// let torontoData = "https://raw.githubusercontent.com/aKnownSaltMine/Mapping_Earthquakes/main/torontoRoutes.json";

// //create a style for the lines
// let myStyle = {
//     color: "#ffffa1",
//     weight: "2"
// }

// // Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data, {
//     style: myStyle,
//     // We turn each feature into a marker on the map.
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup("<b> Airport Code: </b>" + feature.properties.faa + 
//       "<br><hr><b> Airport Name: </b>" + feature.properties.name);      
//     }

//   }).addTo(map);
// });


// accessing the toronto neighborhoods GeoJSON URL
// let torontoHoods = "https://raw.githubusercontent.com/aKnownSaltMine/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// // setting geoJSON style
// let myStyle = {
//     weight: "1",
//     fillColor: "yellow"
// }

// // adding the torronto neighborhood data to map
// d3.json(torontoHoods).then(function(data) {
//     console.log(data);
//     L.geoJSON(data, {
//         style: myStyle,
//         onEachFeature: function(feature, layer) { 
//             layer.bindPopup("<b> Neighborhood: </b>" + feature.properties.AREA_NAME);      
//         }
//     }).addTo(map);
// })

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson").then(function(data) {
    // creating a geoJSON layer with the retrieved data
    L.geoJSON(data).addTo(map);
});