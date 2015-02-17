(function(){
    
    angular
        .module('ReachOutApp')
        .factory('QueryResources', QueryResources);

    QueryResources.$inject = ["$resource", 'ipCookie'];

    function QueryResources($resource, ipCookie, type){

        var QueryResource = function(type){
            
            var self = this;
            self.ipCookie = ipCookie('id');             

            self.service = 
                $resource('/api/' + type + '/:id', {
                    id: '@id'
                }, {
                  query: {
                    method: 'GET',
                    isArray: true
                  },
                  get:{
                    method: 'GET',
                    isArray: true
                  },
                  save: {
                    method: 'POST',
                    params:{user_id: self.ipCookie}
                  },
                  update: {
                    method: 'PUT',
                    params:{user_id: self.ipCookie}
                  }
                });

              

            return self.service;
        };      

        return QueryResource;

    }


}).call(this);