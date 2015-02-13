(function(){

	angular
		.module('ReachOutApp')
		.controller('MainController', MainControllerFunc);

		MainControllerFunc.$inject = ['Resources', 'ipCookie', '$routeParams'];

		function MainControllerFunc(Resources, ipCookie, $routeParams){
			var self = this;
			var EventResource = new Resources('events');
	
			self.id = ipCookie('id');
			self.eventList = getEvents();
			self.event = showEvent();
			self.addEvents = addEvents;

			function getEvents(){
				return EventResource.query();
			}

			function showEvent(){
				return EventResource.get({id: $routeParams.id});
			}

			function addEvents(){
				var newEvents = new EventResource();
				newEvents.title = self.text;
				newEvents.description = self.description;
				newEvents.address = self.address;
				newEvents.duration = self.duration;
				newEvents.$save();

				this.eventList.push(newEvents);
			}	
		}	

})();