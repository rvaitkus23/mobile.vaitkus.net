angular.module('vaitkus.controllers')
.controller('featuresCtrl', function($scope, $location) {
  if (typeof device !== 'undefined' ){
    $scope.device = device;
  } else {
    $scope.device = {model: "Web browser", platform: "Desktop"};
  }
  
  $scope.cards = [
    {
      title: "Camera", 
      body: "Take a picture using standard device camera and use it in app. You can pick picture from you gallery as well. In sample it only adds image into page, but on demand it can be deal in any other way.",
      link: "camera"
    },
    {
      title: "Map GPS", 
      body: "Load map and locate you self on the map. Having location coordinates you can send it to server and it can find nearest objects like events, shops, friends, anything you want to.",
      link: "map"
    },
    {
      title: "Push notification", 
      body: "Todays smartphone apps without notifications is very rear. Most apps does have this feature. Let's take a look how this stuff is implemented in here.",
      link: "pushNotification"
    },
    {
      title: "Local notification", 
      body: "Push notification has to be invoked from server side. But we can set timer and invoke notification localy and no back-end server is needed.",
      link: "localNotification"
    },
    {
      title: "OAuth", 
      body: "User hate registring for each app they install, but we can use thier existing accounts like Facebook and use it for identifing your app users.",
      link: "OAuth"
    },
    {
      title: "Barcode Scanner", 
      body: "Entering long stings in mobile app is a pain. Currently more and more this kind of entering long links or other strings is replace using QR codes and scanners. We can implement it in apps as well.",
      link: "barcodeScanner"
    },
    {
      title: "Flashlight", 
      body: "Some fun stuff like turning on device flashlight to use it like ",
      link: "flashlight"
    }
  ];
  
  $scope.navigate = function(path){
    $location.path("/app/" + path);
  };
});