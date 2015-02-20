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
			self.addVolunteer = addVolunteer;						

			if ($routeParams.id){
				self.event = EventResource.get({id: $routeParams.id});		
			};

			function addVolunteer(){
				$http.post("http://localhost:3000/api/volunteers" , 
					{user_id: ipCookie('id'), event_id: $routeParams.id} ) 
			}
			

			// self.destroy = function(event, index){
			// 	var eventObj = {id: event};
			// 	EventResource.$delete(eventObj);
			// 	self.eventList.splice(index, 1);
			// }	
		}

		return Events;
	}

})();