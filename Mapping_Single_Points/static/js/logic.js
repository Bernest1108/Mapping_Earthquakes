// check if the code is working
console.log("working");

// create the map object with a center and zoom level
let map = L.map('mapid').setView([40.7, -94.5], 4);

L.circleMarker([34.0522, -118.2437], {
    radius: 30,
    color: "black",
    fillColor: "#ffffa1"
}).addTo(map);

// we create the tile layer that will be the background of our layer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: accessToken
}).addTo(map);

// add streets tile layer to the map
streets.addTo(map);