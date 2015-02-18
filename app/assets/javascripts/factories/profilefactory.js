(function(){

	angular
		.module('ReachOutApp')
		.factory('ProfilesFactory', ProfilesFactory)

	ProfilesFactory.$inject = ['$resource'];

	function ProfilesFactory(){

		var Profiles = function(){

			var self = this;

			var getProfile = $resource("http://localhost:3000/api/profile/:id", 
				{id: "@id"} );

			self.profileList = queryProfile();

			function queryProfile(){
				return getProfile.query();
			}


		}

		return Profiles;
	}

})();