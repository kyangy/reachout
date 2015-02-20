(function(){

	angular
		.module('ReachOutApp')
		.controller('MainController', MainController);

		MainController.$inject = ['EventsFactory', 'ProfilesFactory', 'ipCookie', 'FileUploader', '$scope'];

		function MainController(EventsFactory, ProfilesFactory, ipCookie, FileUploader, $scope){
			
			var self = this;
	
			self.Event = new EventsFactory();
			$scope.uploadFile = self.Event.uploadFile;
			self.Profile = new ProfilesFactory();
			self.id = ipCookie('id');
			// $scope.uploadFile = function(files){
			// 	console.log(files);
			// 	// var fd = new FormData();
			// 	// fd.append("file", files[0]);

			// 	// $http.post("http://localhost:3000/api/events", fd, {
			// 	// 	withCredentials: true,
			// 	// 	headers: {'Content-Type': undefined},
			// 	// 	transformRequest: angular.identity
			// 	// })
			// }

		}	

})();