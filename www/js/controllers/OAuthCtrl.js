angular.module('vaitkus.controllers')
.controller('OAuthCtrl', function($scope, $location) {
  $scope.error = "";
  $scope.name = "You are unregistred";
  $scope.isLoggedIn = false;
  $scope.showPicture = false;
  $scope.pictureUrl = "";
  $scope.output = "";
  
  openFB.init('598625876899341'); // Defaults to sessionStorage for storing the Facebook token
  
  var formatFBOutput = function(data){
    var output = "";
    output += "Hi " + data.name + ". ";
    output += "You are " + data.gender;
    if (data.location) 
      output += " and you are living in wonderful town called " + data.location.name;
    
    output += ". ";
    
    // hometown
    if (data.hometown) 
      output += "Your hometown is " + data.hometown.name + ". ";
      
    // education
    if (data.education) 
      output += "You were attending " + data.education[data.education.length - 1].school.name + ". ";
    
    // work
    if (data.work){ 
      output += "And now you are working in " + data.work[0].employer.name + " ";
      if (data.work[0].position){
        output += "as " + data.work[0].position.name;
      }
      output += ". ";
    }
      
    output += "All the information you can see about your self can variate according to your security level in Facebook, what information can be seen to public users";
    $scope.output = output;
  };
  
  var getFBInfo = function(){
    openFB.api({
      path: '/me',
      success: function(data) {
        console.log(data);
        $scope.$apply(function(){
          formatFBOutput(data);
        });
      },
      error: function(error) {
        $scope.$apply(function(){
          $scope.error = error;
        });
        console.log(error);
      }
    });
    openFB.api({
      path: '/me',
      params: {
        fields: 'picture.type(small)'
      },
      success: function(data) {
        if (data.picture && data.picture.data && data.picture.data.url){
          $scope.$apply(function(){
            $scope.pictureUrl = data.picture.data.url;
            $scope.showPicture = true;
          });
        }
        
        console.log("picture");
        console.log(data);
        //$scope.name = data.name;
      },
      error: function(error) {
        console.log(error);
      }
    });
  };
  
  $scope.fbLogin = function(){
    if(gaPlugin !== null){
      gaPlugin.trackEvent( successGAHandler, errorGAHandler, "Feature", "FB login", "start", 1);
    }
    
    if (!$scope.isLoggedIn){
      openFB.login('email',
        function() {
            //alert('Facebook login succeeded');
            $scope.isLoggedIn = true;
            if(gaPlugin !== null){
              gaPlugin.trackEvent( successGAHandler, errorGAHandler, "Feature", "FB login", "success", 1);
            }
            getFBInfo();
        },
        function(error) {
            //alert('Facebook login failed: ' + error.error_description);
            $scope.isLoggedIn = false;
            if(gaPlugin !== null){
              gaPlugin.trackEvent( successGAHandler, errorGAHandler, "Feature", "FB login", "failed: " + error.error_description, 1);
            }
      });
    } else {
      getFBInfo();
    }
    
  };
  
  $scope.navigate = function(path){
    $location.path("/app/" + path);
  };
});