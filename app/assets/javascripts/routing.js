(function(){

	angular
		.module('ReachOutApp')
		.config(config);

		function config($routeProvider, $locationProvider){

			$routeProvider

			.when('/events', {
				templateUrl: 'index.html',
				controller: 'MainController',
				controllerAs: 'main'
			})
		};

})();