angular.module('vaitkus.controllers')
.controller('startPageCtrl', function($scope, $location) {
  $scope.navigate = function(path){
    $location.path("/app/" + path);
  };
});