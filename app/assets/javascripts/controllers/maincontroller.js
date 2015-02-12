(function(){

	angular
		.module('ReachOutApp')
		.controller('MainController', MainControllerFunc);

		MainControllerFunc.$inject = ['$resource']

		function MainControllerFunc($resource){
			var self = this;

			var events = $resource("http://localhost:3000/api/events/:id", {id: "@id"}, {'update': {method: 'PUT'}});

			self.eventList = getEvents();

			function getEvents(){
				return events.query();
			}
		}	

})();