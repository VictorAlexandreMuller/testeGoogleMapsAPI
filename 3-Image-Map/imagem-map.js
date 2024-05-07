var map;
var buttonRoadMap = document.querySelector("#roadmap");
var buttonSatellite = document.querySelector("#satellite");
var buttonHybrid = document.querySelector("#hybrid");
var buttonTerrain = document.querySelector("#terrain");

buttonRoadMap.addEventListener("click", function () {
  map.setMapTypeId("roadmap");
});

buttonSatellite.addEventListener("click", function () {
  map.setMapTypeId("satellite");
});

buttonHybrid.addEventListener("click", function () {
  map.setMapTypeId("hybrid");
});

buttonTerrain.addEventListener("click", function () {
  map.setMapTypeId("terrain");
});

function initMap() {
  var mapOptions = {
    center: { lat: -23.4698412, lng: -47.4299885 },
    zoom: 8,
    mapTypeControlOptions: {
      mapTypeIds: ["osm"],
    },
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // ImageMapType
  var ImageMapType = new google.maps.ImageMapType({
    tileSize: new google.maps.Size(256, 256),
    getTileUrl: function (coord, zoom) {
      return (
        "https://tile.openstreetmap.org/" +
        zoom +
        "/" +
        coord.x +
        "/" +
        coord.y +
        ".png"
      );
    },
    maxZoom: 18,
    name: "Open Street Map",
  });
  map.mapTypes.set("osm", ImageMapType);
  map.setMapTypeId("osm");
}
