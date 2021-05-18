$(document).ready(function () {
var mymap = L.map('mymap', 
{center: [52.1, 21.0], zoom: 10, zoomControl: false, attributionControl: false});
    	
var lyrOSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    	mymap.addLayer(lyrOSM);
  
var lyrPRG = 
  L.tileLayer.wms("http://localhost:8095/geoserver/projekt_PG/wms",
        {
        layers: "projekt_PG:Gminy", 
        format: 'image/png', 
        transparent : 'true', 
        version : '1.1.1'
        });
    mymap.addLayer(lyrPRG);

    L.control.scale({position:'bottomleft',imperial:false, maxWidth:200}).addTo(mymap);
  
  
    });

 