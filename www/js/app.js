// register device ready event to init some of plugins
document.addEventListener("deviceready",function(){
  initGA();
},false);

angular.module('vaitkus', ['ionic', 'vaitkus.controllers', 'vaitkus.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {url: "/app", abstract: true, templateUrl: "templates/menu.html", controller: 'AppCtrl'})
    .state('app.startpage', {url: "/startpage", views: {'menuContent' :{templateUrl: "templates/startPage.html", controller: "startPageCtrl"}}})
    .state('app.about', {url: "/about", views: {'menuContent' :{templateUrl: "templates/about.html", controller: "aboutCtrl"}}})
    .state('app.features', {url: "/features", views: {'menuContent' :{templateUrl: "templates/features.html", controller: "featuresCtrl"}}})
    //.state('app.blog', {url: "/blog", views: {'menuContent' :{templateUrl: "templates/blog.html"}}})
    .state('app.contacts', {url: "/contacts", views: {'menuContent' :{templateUrl: "templates/contacts.html"}}})

// camera, map, pushNotification, localNotification, OAuth, barcodeScanner, flashlight    
    .state('app.camera', {url: "/camera", views: {'menuContent' :{templateUrl: "templates/camera.html", controller: "cameraCtrl"}}})
    .state('app.map', {url: "/map", views: {'menuContent' :{templateUrl: "templates/map.html", controller: "mapCtrl"}}})
    .state('app.pushNotification', {url: "/pushNotification", views: {'menuContent' :{templateUrl: "templates/pushNotification.html", controller: "pushNotificationCtrl"}}})
    .state('app.localNotification', {url: "/localNotification", views: {'menuContent' :{templateUrl: "templates/localNotification.html", controller: "localNotificationCtrl"}}})
    .state('app.OAuth', {url: "/OAuth", views: {'menuContent' :{templateUrl: "templates/OAuth.html", controller: "OAuthCtrl"}}})
    .state('app.barcodeScanner', {url: "/barcodeScanner", views: {'menuContent' :{templateUrl: "templates/barcodeScanner.html", controller: "barcodeScannerCtrl"}}})
    .state('app.flashlight', {url: "/flashlight", views: {'menuContent' :{templateUrl: "templates/flashlight.html", controller: "flashlightCtrl"}}});
    
    
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/startpage');
  
 
}).run(['$rootScope',function($rootScope){
   $rootScope.$on('$stateChangeStart', function(event, currRoute, currParams, prevRoute, prevParams){
    console.log("--route changed " + currRoute.name);
    if(gaPlugin !== null){
      gaPlugin.trackEvent( successGAHandler, errorGAHandler, "PageChange", currRoute.name, "", 1);
    }
  });
}]);

