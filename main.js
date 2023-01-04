const ny = document.getElementById('marker');
const hk = document.getElementById('hongKong');
const nyCoordinates = {lat:40.73279414313846, lng:-73.9975407008274};
const hkCoordinates = {lat:22.302825022611973, lng:114.15989744277452};

let map;
function initMap(){
  // console.log('map inited')
 
  map = new google.maps.Map(document.getElementById('map'), {
      center: {lat:40.790649,lng: -73.969082},
      zoom: 4, 
  })
  

  
}

function markerNy(){
  new google.maps.Marker({
    position:nyCoordinates,
    map,
    title: "NYC"
  })
}
function markerHk(){
  new google.maps.Marker({
    position:hkCoordinates,
    map: map,
    title: "NYC",
    
  })
}



$(document).ready(function () {
  $("#slid").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
  });
 
  })
ny.addEventListener('click',markerNy);
hk.addEventListener('click',markerHk);






