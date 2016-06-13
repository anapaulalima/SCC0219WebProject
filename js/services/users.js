angular.module("correileganteApp").factory('Users', ['$http', 'Upload', function($http, Upload){
	return {
		get: function(username){
			return $http.get(urlpath("user/details/"+username));
		},
		am_i_following: function(username){
			data = {
				formdata: {
					user: username
				}
			}
			return $http.post(urlpath("user/am_i_following"), data);
		},
		follow: function(username){
			data = {
				formdata: {
					user: username
				}
			}
			return $http.post(urlpath("user/follow"), data);
		},
		unfollow: function(username){
			data = {
				formdata: {
					user: username
				}
			}
			return $http.post(urlpath("user/unfollow"), data);
		},
		new_user: function(formdata, photo){
			if (typeof photo === 'undefined' || photo == null) throw Error;

			data = {formdata: formdata};
			data.formdata.birthday = data.formdata.birthday_date.toISOString().slice(0, 10);

			return Upload.upload({
						method: 'POST',
						url: urlpath('user/new_user'),
						data: $.extend({image: photo}, data.formdata)
					});
		},
		all: function(){
			return $http.get(urlpath("user"));
		},
		delete: function(){
			return $http.post(urlpath("user/delete_user"));
		},
		search: function(username){
			return $http.get(urlpath("user/search_user/"+username));
		}
	};
}]);