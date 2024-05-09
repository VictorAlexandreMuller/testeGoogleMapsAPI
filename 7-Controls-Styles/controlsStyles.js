//
// https://developers.google.com/maps/documentation/javascript/reference/control?hl=pt-br
// https://developers.google.com/maps/documentation/javascript/controls?hl=pt-br#ControlsOverview
//

var map;

function initMap() {
  var mapOptions = {
    center: { lat: -23.4698412, lng: -47.4299885 },
    zoom: 8,
    // disableDefaultUI: true, // desabilita o setup padrao dos controles e retira todos da tela
    zoomControl: false,
    streetViewControl: false,

    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR, //DROPDOWN_MENU ~~ coloca uma comboBox
      position: google.maps.ControlPosition.TOP_CENTER,
    },

    fullscreenControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM,
    },
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
