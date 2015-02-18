(function(){

	angular
		.module('ReachOutApp')
		.controller('MainController', MainController);

		MainController.$inject = ['EventsFactory', 'ipCookie'];

		function MainController(EventsFactory, ipCookie){
			var self = this;
	
			self.Event = new EventsFactory();
			self.id = ipCookie('id');

			// self.uploader = new FileUploader();

		}	

})();