angular.module('vaitkus.controllers')
.controller('mapCtrl', function($scope, $location) {
  var map;
  var locationSuccess = function(position){
    initMap(position.coords.latitude, position.coords.longitude);
  };
  var locationError = function(error){
    alert(error.message);
    initMap(51.506744, -0.117477);
  };
  
  // get device's geographical location and return it as a Position object (which is then passed to onSuccess)
  navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
 
  function initMap(latitude, longitude){
    var myLocation = new google.maps.LatLng(latitude, longitude);

    map  = new google.maps.Map(document.getElementById('map-canvas'), {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: myLocation,
      zoom: 15
    });
    
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(latitude, longitude),
      map: map,
      title: "You are here!",
      animation: google.maps.Animation.DROP
    });
    
    if(gaPlugin !== null){
      gaPlugin.trackEvent( successGAHandler, errorGAHandler, "Feature", "Map", "init", 1);
    }
  };
  
  
  $scope.navigate = function(path){
    $location.path("/app/" + path);
  };
});