angular.module("correileganteApp").factory('Users', ['$http', function($http){
	return {
		get: function(username){
			return $http.get(urlpath("user/details/"+username));
		}
	};
}]);