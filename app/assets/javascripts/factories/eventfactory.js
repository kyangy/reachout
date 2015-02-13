(function(){

	angular
		.module('ReachOutApp')
		.factory('EventsFactory', EventsFactoryFunc);

	EventsFactory.$inject = ['Resources', '$http', '$routeParams'];

	function EventsFactoryFunc(Resources, $http, $routeParams){

		var Events = function(){
			var self = this;

			var EventResource = new Resources('events');

			self.eventList = EventResource.query();
			self.event = showEvent();
			self.addEvents = addEvents;

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

		return Events;
	}

})();