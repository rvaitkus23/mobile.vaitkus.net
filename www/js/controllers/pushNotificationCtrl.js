angular.module('vaitkus.controllers')
.controller('pushNotificationCtrl', function($scope, $location) {
  $scope.navigate = function(path){
    $location.path("/app/" + path);
  };
});