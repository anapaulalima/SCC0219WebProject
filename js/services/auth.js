angular.module("correileganteApp").factory('Auth', ['$http', function($http){
	return {
		login: function(data){
			return $http.post(urlpath("login"), data);
		}
	};
}]);