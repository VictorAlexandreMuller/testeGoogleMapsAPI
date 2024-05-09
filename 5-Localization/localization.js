var map;

function initMap() {
  var mapOptions = {
    center: { lat: -23.4698412, lng: -47.4299885 },
    zoom: 8,
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
