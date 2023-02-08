var map = L.map('map').setView([36.77, -119.41], 5);

var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

$.getJSON("https://gis.data.cnra.ca.gov/datasets/CALFIRE-Forestry::california-fire-perimeters-all-1.geojson?outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D",function(data){
  var firezones = L.geoJson(data, {
      style: function (feature) {
        return {
          color: 'red'
        };
      }
    }).addTo(map);
    
  
$.getJSON("https://gis.data.cnra.ca.gov/datasets/CALFIRE-Forestry::facilities-for-wildland-fire-protection.geojson?outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D",function(data){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(map);
  
  var layer = L.geoJSON(data, {
 onEachFeature: function (f, l) {
   l.bindPopup('<b>Wildland Fire Station Name: ' + f.properties.NAME + '</b>'
              );
 
   
 }
}).addTo(map);
   });
});