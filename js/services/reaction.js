angular.module("correileganteApp").factory('Reaction', ['$http', function($http){
	return {
		my_reaction: function(id){
			return $http.get(urlpath("reaction/my_reaction/"+id));
		},
		set_reaction: function(data){
			console.log(data);
			return $http.post(urlpath("reaction/set_reaction/"), data);
		}
	};
}]);