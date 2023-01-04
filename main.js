$(document).ready(function () {
  $("#slid").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
  });
  function initMap(){
    console.log('map inited')
    new google.maps.Map(document.getElementById('map'), {
        center: {lat:40.790649,lng: -73.969082},
        zoom: 4, 
    })
    
    
  }
  initMap();
});







