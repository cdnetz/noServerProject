var app = angular.module('noServerProj');

app.service ('messageService' , function ($http, $firebase) {
	// this.postMessage = function(commentTxt){
	// 	return{
	// 		method: 'POST',
	// 		url: ref,
	// 		data: {text: commentTxt}
	// 	}
	// }

	var firebaseUrl = 'https://noserverproj.firebaseio.com/';

	this.getMessages = function() {
		return $firebase(new Firebase(firebaseUrl + 'messages'))
	}
})