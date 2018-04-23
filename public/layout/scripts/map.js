
/* Function used to put location on the map */

function initMap(lag, lon) {
        lag = 40.4258686;   //this two are should be switched to all
        lon = -86.9080655;
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15.5,
          center: new google.maps.LatLng(40.4258686,-86.9080655),
          mapTypeId: 'roadmap'
        });

        // Create a <script> tag and set the USGS URL as the source.
        var script = document.createElement('script');
        script.src = eqfeed_callback({"type":"FeatureCollection","features":[
{"type":"Feature","geometry":{"type":"Point","coordinates":[-86.9080655,40.4258686,189]},"id":"first"}]});
    
        document.getElementsByTagName('head')[0].appendChild(script);
}


// Loop through the results array and place a marker for each
// set of coordinates.
//
window.eqfeed_callback = function(results) {
        for (var i = 0; i < results.features.length; i++) {
          var coords = results.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[1],coords[0]);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
          });
      }
}
 

/* Function used to show the search resultss */

