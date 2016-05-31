angular.module("correileganteApp").factory('Post', ['$http', function($http){
	return {
		new: function(data){
			return $http.post(urlpath("tweet/new"), data);
		},
		get: function(id){
			return $http.get(urlpath("tweet/"+id));
		},
		followings: function(){
			return $http.get(urlpath("tweet/followings"));
		}
	};
}]);