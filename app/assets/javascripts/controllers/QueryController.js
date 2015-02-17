(function(){

	angular
		.module('ReachOutApp')
		.controller('QueryController', QueryController);

		QueryController.$inject = ['Resources'];

		function QueryController(Resources){

				var self = this;

				var QueryResources = new Resources('events');

				self.queryList = QueryResources.query();
		}

})();