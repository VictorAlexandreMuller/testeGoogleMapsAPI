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

class MeuMapa {
  constructor(tileSize) {
    this.tileSize = tileSize;
    this.maxZoom = 18;
    this.name = "Meu Mapa";
    this.alt = "0 mapa não carregou";
  }

  getTile(coord, zoom, ownerDocument) {
    var div = ownerDocument.createElement("div");
    div.innerHTML = "Teste Victor";
    div.style.width = this.tileSize.width + "px";
    div.style.height = this.tileSize.height + "px";
    div.style.fontSize = "10px";
    div.style.backgroundColor = "#ddd";
    div.style.borderStyle = "solid";
    div.style.borderWidth = "1px";
    div.style.borderColor = "#333";
    return div;
  }
}

function initMap() {
  var mapOptions = {
    center: { lat: -23.4698412, lng: -47.4299885 },
    zoom: 17,

    // define como o mapa será renderizado ao abrir a pagina:
    // roadmap, satellite, hybrid, terrain
    mapTypeId: "roadmap",
    mapTypeControlOptions: {
      mapTypeIds: ["meumapa", "roadmap", "satellite"], //, "hybrid", "terrain"
    },
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  map.mapTypes.set("meumapa", new MeuMapa(new google.maps.Size(256, 256)));
}
