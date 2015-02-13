(function(){

	angular
		.module('ReachOutApp')
		.controller('MainController', MainControllerFunc);

		MainControllerFunc.$inject = ['EventsFactory', 'ipCookie'];

		function MainControllerFunc(EventsFactory, ipCookie){
			var self = this;
	
			self.Event = new EventsFactory();
			self.id = ipCookie('id');

		}	

})();