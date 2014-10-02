angular.module('vaitkus.controllers')
.controller('localNotificationCtrl', function($scope, $location) {
  $scope.outputText = "";
  $scope.buttonTitle = "Set notification in 10s";
  
  $scope.setNotification = function(){
    window.plugin.notification.local.add({
      id:         "1",  // A unique id of the notifiction
      date:       new Date(new Date().getTime() + 10000),    // This expects a date object
      message:    "Thank you for trying out this app. You are more than welcome to contact me",  // The message that is displayed
      title:      "This is local notification",  // The title of the message
      badge:      1,  // Displays number badge to notification
      json:       JSON.stringify({name:'passed', message: 'you have received'}),  // Data to be passed through the notification
      autoCancel: true // Setting this flag and the notification is automatically canceled when the user clicks it
      //ongoing:    Boolean, // Prevent clearing of notification (Android only)
    });
    $scope.buttonTitle = "Notification is set";
    $scope.outputText = "Notification has been scheduled in 10 seconds check you statusbar and you will find notification. Click it and come back you the app";
  
    if(gaPlugin !== null){
      gaPlugin.trackEvent( successGAHandler, errorGAHandler, "Feature", "Local Notification", "set", 1);
    }
  };
  
  window.plugin.notification.local.onclick = function (id, state, json) {
    $scope.$apply(function(){
      $scope.outputText = "You have just received notification you clicked for. It works as expected and can be used in any way you need.";      
    });
    
    if(gaPlugin !== null){
      gaPlugin.trackEvent( successGAHandler, errorGAHandler, "Feature", "Local Notification", "recieved", 1);
    }
  };
  
  $scope.navigate = function(path){
    $location.path("/app/" + path);
  };
});