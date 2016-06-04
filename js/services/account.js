angular.module("correileganteApp").factory('Account', ['$http', function($http){
	return {
		me: function(){
			return $http.get(urlpath("user/eu"));
		},
		logout: function(){
			return $http.get(urlpath("logout"));
		},
		update_user: function(data){
			data.formdata.birthday = data.formdata.birthday_date.toISOString().slice(0, 10);
			return $http.post(urlpath("user/update_user"), data);
		},
		update_password: function(data){
			return $http.post(urlpath("user/update_user_password"), data);
		}
	};
}]);