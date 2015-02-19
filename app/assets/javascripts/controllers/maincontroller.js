(function(){

	angular
		.module('ReachOutApp')
		.controller('MainController', MainController);

		MainController.$inject = ['EventsFactory', 'ProfilesFactory', 'ipCookie', 'FileUploader'];

		function MainController(EventsFactory, ProfilesFactory, ipCookie, FileUploader){
			
			var self = this;
	
			self.Event = new EventsFactory();
			self.Profile = new ProfilesFactory();
			self.id = ipCookie('id');

			// self.uploader = new FileUploader({url: "http://localhost:3000/api/events", formData: self.Event.newEvent()});

			// self.createEvent = function(){
			// 	self.uploader.formData = {
			// 		title: "Kevin",
			// 		description: "Kevin rocks",
			// 		goal: 2,
			// 		hours: 15,
			// 		short: "String",
			// 		location: "String",
			// 		date: "11/12/2015"
			// 	};
			// 	console.log(self.uploader.formData, self.uploader)
			// 	self.uploader.uploadAll()
			// }

		}	

})();