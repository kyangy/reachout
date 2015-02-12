(function(){

	angular
		.module('ReachOutApp')
		.controller('MainController', MainControllerFunc);

		MainControllerFunc.$inject = ['Resources', 'ipCookie'];

		function MainControllerFunc(Resources, ipCookie){
			var self = this;
			var EventResource = new Resources('events');
			
			self.id = ipCookie('id');
			self.eventList = getEvents();
			self.addEvents = addEvents;

			function getEvents(){
				return EventResource.query();
			}

			function addEvents(){
				var newEvents = new EventResource();
				newEvents.title = self.text;
				newEvents.$save();

				this.eventList.push(newEvents);
			}	
		}	

})();