//
// https://developers.google.com/maps/documentation/javascript/geometry?hl=pt-br
// https://developers.google.com/maps/documentation/utilities/polylinealgorithm?hl=pt-br
// https://pt.wikipedia.org/wiki/Indicador_de_rumo
// https://gist.github.com/stiucsib86/6150321
//

var map;
const centerMap = { lat: -3.716816, lng: -38.519115 };

function initMap() {
  var mapOptions = {
    center: centerMap,
    zoom: 8,
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
