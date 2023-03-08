
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('venue-map'), {
    center: {lat: 37.7749, lng: -122.4194},
    zoom: 8
  });
}

var geocoder = new google.maps.Geocoder();

var address = document.getElementById('address').value;
geocoder.geocode({'address': address}, function(results, status) {
  if (status === 'OK') {
    var location = results[0].geometry.location;
    map.setCenter(location);
    var marker = new google.maps.Marker({
      map: map,
      position: location
    });
  } else {
    alert('Geocode was not successful for the following reason: ' + status);
  }
});
