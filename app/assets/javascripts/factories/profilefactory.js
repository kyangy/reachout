(function(){

	angular
		.module('ReachOutApp')
		.factory('ProfilesFactory', ProfilesFactory)

	ProfilesFactory.$inject = ['Resources', 'ipCookie', '$routeParams'];

	function ProfilesFactory(Resources, ipCookie, $routeParams){

		var Profiles = function(){

			var self = this;

			var ProfileResources = new Resources('users');
		
			self.getProfile = ProfileResources.get({id: $routeParams.id});

		}

		return Profiles;
	}

})();