(function(){

	angular
		.module('ReachOutApp')
		.factory('EventsFactory', EventsFactory);

	EventsFactory.$inject = ['Resources', '$http', '$routeParams'];

	function EventsFactory(Resources, $http, $routeParams){

		var Events = function(){
			var self = this;

			var EventResource = new Resources('events');

			self.eventList = EventResource.query();
			// self.event = showEvent();
			self.addEvents = addEvents;
			self.deleteEvent = deleteEvent;

			// function showEvent(){
			// 	return EventResource.get({id: $routeParams.id});
			// }

			function addEvents(){
				var newEvents = new EventResource();
				newEvents.title = self.text;
				newEvents.description = self.description;
				newEvents.duration = self.duration;
				newEvents.goal = self.goal;
				newEvents.image = self.image;
				newEvents.$save();

				this.eventList.push(newEvents);
			}

			function deleteEvent(EventResource){
				EventResource.$delete();
				self.eventList.splice(self.eventList.indexOf(EventResource), 1);
			}
			// self.destroy = function (event, index){
			// 	var eventObj = {id: event};
			// 	EventResource.delete(eventObj);
			// 	self.eventList.splice(index, 1);
			// }	
		}

		return Events;
	}

})();