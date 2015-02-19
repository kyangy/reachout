(function(){

	angular
		.module('ReachOutApp')
		.factory('EventsFactory', EventsFactory);

	EventsFactory.$inject = ['Resources', '$http', '$routeParams', 'ipCookie', 'FileUploader'];

	function EventsFactory(Resources, $http, $routeParams, ipCookie, FileUploader){

		var Events = function(){
			var self = this;

			var EventResource = new Resources('events');

			self.eventList = EventResource.query();
			

			if ($routeParams.id){
				self.event = EventResource.get({id: $routeParams.id});		
			};
				
			self.addEvents = addEvents;
			self.addVolunteer = addVolunteer;						
			self.newEvents = new EventResource(); 
			// self.uploader = new FileUploader({url: '/api/events'}, 
			// 	{formData: {
			// 		title: self.text,
			// 		description: self.description,
			// 		date: self.date,
			// 		goal: self.goal,
			// 		location: self.location,
			// 		short: self.short,
			// 		hours: self.hours,
			// 		user_id: self.ipCookie				
			// 	}}
			// );
	
			// self.uploadFile = function(files){
			// 	var fd = new FormData();
			// 	fd.append("file", files[0]);

			// 	$http.post("http://localhost:3000/api/events", fd, {
			// 		withCredentials: true,
			// 		headers: {'Content-Type': undefined},
			// 		transformRequest: angular.identity
			// 	})
			// }

			function addVolunteer(){
				$http.post("http://localhost:3000/api/volunteers" , 
					{user_id: ipCookie('id'), event_id: $routeParams.id} ) 
			}
			

			function addEvents(){
								
				self.newEvents.title = self.text;
				self.newEvents.description = self.description;
				self.newEvents.date = self.date;
				self.newEvents.goal = self.goal;
				self.newEvents.location = self.location;
				self.newEvents.short = self.short;
				self.newEvents.hours = self.hours;
				// self.newEvents.image = self.uploader
				self.newEvents.user_id = self.ipCookie;
				self.uploader.uploadAll();
				self.newEvents.$save();

				self.eventList.push(self.newEvents);
				window.location.replace('#/events');
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