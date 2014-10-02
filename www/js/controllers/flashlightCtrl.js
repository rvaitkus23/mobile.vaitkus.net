angular.module('vaitkus.controllers')
.controller('flashlightCtrl', function($scope, $location) {
  var isTurnedOn = false;
  
  $scope.title = "Turn On";
  
  window.plugins.flashlight.available(function(isAvailable) {
    if (isAvailable) {
      //alert("Flashlight works");
    } else {
      alert("Flashlight not available on this device");
    }
  });
  
  $scope.switchLight = function(){
    if(gaPlugin !== null){
      gaPlugin.trackEvent( successGAHandler, errorGAHandler, "Feature", "FlashLight", $scope.isTurnedOn, 1);
    }
    if (!$scope.isTurnedOn){
      // switch on
      //alert("is turning on");
      window.plugins.flashlight.switchOn(flashlightSuccess, flashlightError); // success/error callbacks may be passed
      $scope.isTurnedOn = true;
      $scope.title = "Turn Off";
    } else {
      //alert("is turning off");
      window.plugins.flashlight.switchOff(flashlightSuccess, flashlightError); // success/error callbacks may be passed
      $scope.isTurnedOn = false;
      $scope.title = "Turn On";
    }
  };
  
  function flashlightSuccess(message){
    //alert("success: " + message);
    if(gaPlugin !== null){
      gaPlugin.trackEvent( successGAHandler, errorGAHandler, "Feature", "FlashLight", "success: " + message, 1);
    }
  }
  
  function flashlightError(message){
    alert("error: " + message);
    if(gaPlugin !== null){
      gaPlugin.trackEvent( successGAHandler, errorGAHandler, "Feature", "FlashLight", "error: " + message, 1);
    }
  }
  
  $scope.navigate = function(path){
    $location.path("/app/" + path);
  };
});