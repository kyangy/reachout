(function(){

	angular
		.module('ReachOutApp')
		.factory('CommentsFactory', CommentsFactory)

	CommentsFactory.$inject = ['Resources']	

	function CommentsFactory(Resources){

		var Comments = function(){

			var self = this;

			var CommentsResource = new Resources('comments');

			if ($routeParams.id) {
				self.getComment = CommentsResource.get({id: $routeParams.id});
			}

			function addComment(){
				var newComment = new CommentsResource();
				newComment.body = self.body;
				newComment.$save();

				this.getComment.push(newComment);
			}

		}

		return Comments;

	}

})();