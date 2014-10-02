angular.module('vaitkus.controllers')
.controller('cameraCtrl', function($scope, $location) {
  $scope.takePicture = function(){
    navigator.camera.getPicture($scope.onSuccess, $scope.onFail, { quality: 50,
      destinationType: Camera.DestinationType.FILE_URI });
    
    if(gaPlugin !== null){
      gaPlugin.trackEvent( successGAHandler, errorGAHandler, "Feature", "Camera", "take picture", 1);
    }
  };
  
  $scope.onSuccess = function(imageURI) {
    $scope.$apply(function(){
      //alert("image recieved");
      $scope.imageSrc = imageURI;  
    });
    
    if(gaPlugin !== null){
      gaPlugin.trackEvent( successGAHandler, errorGAHandler, "Feature", "Camera", "success", 1);
    }
  };

  $scope.onFail = function(message) {
    alert('Failed because: ' + message);
    
    if(gaPlugin !== null){
      gaPlugin.trackEvent( successGAHandler, errorGAHandler, "Feature", "Camera", "failed: " + message, 1);
    }
  };
  
  $scope.navigate = function(path){
    $location.path("/app/" + path);
  };
});