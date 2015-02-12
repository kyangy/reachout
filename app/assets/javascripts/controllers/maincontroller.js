(function(){

	angular
		.module('ReachOutApp')
		.controller('MainController', MainControllerFunc);

		MainControllerFunc.$inject = ['Resources', 'ipCookie'];

		function MainControllerFunc(Resources, ipCookie){
			var self = this;
			
			self.id = ipCookie('id');

			var EventResource = new Resources('events');

			self.eventList = EventResource.query();	
		}	

})();