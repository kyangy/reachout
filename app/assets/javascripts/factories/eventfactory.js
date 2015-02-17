(function(){

	angular
		.module('ReachOutApp')
		.factory('EventsFactory', EventsFactory);

	EventsFactory.$inject = ['Resources', '$http', '$routeParams', 'ipCookie'];

	function EventsFactory(Resources, $http, $routeParams, ipCookie){

		var Events = function(){
			var self = this;

			var EventResource = new Resources('events');
			// var ShowResource = new QueryResources('events');

			self.eventList = EventResource.query();
			// self.event = showEvent();
			self.addEvents = addEvents;
			self.addVolunteer = addVolunteer;
			// self.deleteEvent = deleteEvent;

			// function showEvent(){
			// 	return EventResource.get({id: $routeParams.id});
			// }

			function addVolunteer(){
				$http.post("http://localhost:3000/api/volunteers" , 
					{user_id: ipCookie('id'), event_id: $routeParams.id} ) 
			}

			function addEvents(){
				var newEvents = new EventResource();
				newEvents.title = self.text;
				newEvents.description = self.description;
				newEvents.date = self.date;
				newEvents.goal = self.goal;
				newEvents.location = self.location;
				newEvents.image = self.image;
				newEvents.user_id = self.ipCookie;
				newEvents.$save();

				this.eventList.push(newEvents);
			}

			// function deleteEvent(EventResource){
			// 	EventResource.$delete();
			// 	self.eventList.splice(self.eventList.indexOf(EventResource), 1);
			// }
			self.destroy = function(event, index){
				var eventObj = {id: event};
				EventResource.$delete(eventObj);
				self.eventList.splice(index, 1);
			}	
		}

		return Events;
	}

})();