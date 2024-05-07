var map;
var button = document.querySelector("#satellite");

button.addEventListener("click", function () {
  map.setMapTypeId("satellite");
});

function initMap() {
  var mapOptions = {
    center: { lat: -23.4698412, lng: -47.4299885 },
    zoom: 17,
    mapTypeId: "roadmap", // roadmap, satellite, hybrid, terrain
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
