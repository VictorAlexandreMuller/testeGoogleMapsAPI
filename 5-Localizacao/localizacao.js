// -----------------------------------------------------------
// -----------------------------------------------------------
// Style Maps, site: https://snazzymaps.com/explore
// Tema utilizado: https://snazzymaps.com/style/21/hopper
// -----------------------------------------------------------
// -----------------------------------------------------------

var map;

function initMap() {
  var mapOptions = {
    center: { lat: -23.4698412, lng: -47.4299885 },
    zoom: 8,

    // https://www.youtube.com/watch?v=QZkDcOL_qC0&list=PLfeu5i2CGb0sDdiR_RpWbH-758luP3_fj&index=10&ab_channel=EdigleyssonSilva
    disableDefaultUI: false,
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
