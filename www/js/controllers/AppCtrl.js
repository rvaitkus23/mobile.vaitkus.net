angular.module('vaitkus.controllers', [])
.controller('AppCtrl', function($scope, $location, $rootScope) {
  $scope.navigate = function(path){
    $location.path("/app/" + path);
  };
  
  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
    console.log("--route changed " + currRoute);
    if(gaPlugin !== null){
      gaPlugin.trackEvent( successGAHandler, errorGAHandler, "PageChange", currRoute, prevRoute, 1);
    }
  });
});