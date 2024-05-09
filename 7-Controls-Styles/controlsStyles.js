//
// https://developers.google.com/maps/documentation/javascript/reference/control?hl=pt-br
// https://developers.google.com/maps/documentation/javascript/controls?hl=pt-br#ControlsOverview
//

var map;
const centerMap = { lat: -3.716816, lng: -38.519115 };

// CSS
// Interacao
// div - Controle
// div - ui
// div - text

class CenterControl {
  constructor(map) {
    this.controlDiv = document.createElement("div");
    this.controlUI = document.createElement("div");
    this.controlText = document.createElement("div");

    this.controlUI.style.backgroundColor = "#000"; // Preto
    this.controlUI.style.border = "2px solid #ebebeb";
    this.controlUI.style.borderRadius = "3px";
    this.controlUI.style.padding = "6px";
    this.controlUI.title = "Centralizar Mapa";
    this.controlUI.style.cursor = "pointer";

    this.controlDiv.appendChild(this.controlUI);

    this.controlText.style.fontSize = "16px";
    this.controlText.style.textAlign = "center";
    this.controlText.style.lineHeight = "20px";
    this.controlText.style.color = "#fff"; // Branco
    this.controlText.innerHTML = "Centralizar";

    this.controlUI.appendChild(this.controlText);

    this.controlUI.addEventListener("click", () => {
      map.setCenter(centerMap);
    });
  }
}

function initMap() {
  var mapOptions = {
    center: centerMap,
    zoom: 8,
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const centerControl = new CenterControl(map);

  map.controls[google.maps.ControlPosition.TOP_CENTER].push(
    centerControl.controlDiv
  );
}
