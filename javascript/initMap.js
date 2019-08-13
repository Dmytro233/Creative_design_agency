function initMap() {
  var location = { lat: 49.8320891, lng: 24.0024438 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
