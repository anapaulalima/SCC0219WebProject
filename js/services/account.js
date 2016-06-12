angular.module("correileganteApp").factory('Account', ['$http', 'Upload', function($http, Upload){
	return {
		me: function(){
			return $http.get(urlpath("user/eu"));
		},
		logout: function(){
			return $http.get(urlpath("logout"));
		},
		update_user: function(data, photo){
			var formdata = data;
			formdata.birthday = data.birthday_date.toISOString().slice(0, 10);

			if (typeof photo === 'undefined' || photo == null) {
				return $http.post(urlpath("user/update_user"), formdata);
			} else {
				return Upload.upload({
						method: 'POST',
						url: urlpath('user/update_user'),
						data: $.extend({image: photo}, formdata)
					});
			}
		},
		update_password: function(data){
			return $http.post(urlpath("user/update_user_password"), data);
		}
	};
}]);