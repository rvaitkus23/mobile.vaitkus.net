angular.module('vaitkus.controllers')
.controller('barcodeScannerCtrl', function($scope, $location) {
  $scope.result = "Result will be placed here";
  $scope.title = "Scan";
  
  $scope.scan = function(){
    if(gaPlugin !== null){
      gaPlugin.trackEvent( successGAHandler, errorGAHandler, "Feature", "Scan", "start", 1);
    }
    cordova.plugins.barcodeScanner.scan(
      function (result) {
        $scope.$apply(function(){
          $scope.result = result.text;
        });
        if(gaPlugin !== null){
          gaPlugin.trackEvent( successGAHandler, errorGAHandler, "Feature", "Scan", "success", 1);
        }
      }, 
      function (error) {
        if(gaPlugin !== null){
          gaPlugin.trackEvent( successGAHandler, errorGAHandler, "Feature", "Scan", "failed: " + error, 1);
        }
        alert("Scanning failed: " + error);
      }
   );
  };
  
  
  $scope.navigate = function(path){
    $location.path("/app/" + path);
  };
});