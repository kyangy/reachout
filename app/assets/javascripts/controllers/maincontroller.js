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

		}	

})();