(function(){

	angular
		.module('ReachOutApp')
		.factory('EventsFactory', EventsFactory);

	EventsFactory.$inject = ['Resources', '$http', '$routeParams', 'ipCookie'];

	function EventsFactory(Resources, $http, $routeParams, ipCookie){

		var Events = function(){
			var self = this;

			var EventResource = new Resources('events');

			self.eventList = EventResource.query();

			if ($routeParams.id){
				self.event = EventResource.get({id: $routeParams.id})		
			};
				
			self.addEvents = addEvents;
			self.addVolunteer = addVolunteer;

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
				newEvents.short = self.short;
				newEvents.hours = self.hours
				newEvents.user_id = self.ipCookie;
				newEvents.$save();

				this.eventList.push(newEvents);
			}

			self.destroy = function(event, index){
				var eventObj = {id: event};
				EventResource.$delete(eventObj);
				self.eventList.splice(index, 1);
			}	
		}

		return Events;
	}

})();