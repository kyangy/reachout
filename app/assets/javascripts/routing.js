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

			.when('/events/new', {
				templateUrl: 'new.html',
				controller: 'MainController',
				controllerAs: 'main'
			})

			.when('/events/:id', {
				templateUrl: 'show.html',
				controller: 'MainController',
				controllerAs: 'main'
			})

			.when('/profile/:id', {
				templateUrl: 'profile.html',
				controller: 'MainController',
				controllerAs: 'main'
			})

		};

})();