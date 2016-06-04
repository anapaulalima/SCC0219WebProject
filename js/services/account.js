angular.module("correileganteApp").factory('Account', ['$http', function($http){
	return {
		me: function(){
			return $http.get(urlpath("user/eu"));
		},
		logout: function(){
			return $http.get(urlpath("logout"));
		}
	};
}]);