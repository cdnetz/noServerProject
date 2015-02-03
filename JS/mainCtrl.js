var app = angular.module('noServerProj');

app.controller("SampleController", function($scope, $firebase, messageService) {
  // now we can use $firebase to synchronize data between clients and the server!
  var ref = new Firebase("https://noServerProj.firebaseio.com/");
  var sync = $firebase(ref);

  $scope.messages = messageService.getMessages().$asArray();

  $scope.pushMessage = function(){
  	console.log($scope.messages);
  	
  	$scope.messages.$add(
  		{message : $scope.commentTxt}, function(error){
  			if (error){
  				console.log(error);
  			}
  		})
  	}

  $scope.addComment = false;
  


});