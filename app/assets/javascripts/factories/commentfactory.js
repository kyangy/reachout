(function(){

	angular
		.module('ReachOutApp')
		.factory('CommentsFactory', CommentsFactory)

	CommentsFactory.$inject = ['Resources']	

	function CommentsFactory(Resources){

		var Comments = function(){

			var self = this;

			var CommentsResource = new Resources('comments');

		}

		return Comments;

	}

})();