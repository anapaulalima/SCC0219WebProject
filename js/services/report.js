angular.module("correileganteApp").factory('Report', ['$http', function($http){
	return {
		user_top20: function(data){
			return $http.post(urlpath("user/user_top20/"), data);
		},
		post_top20: function(data){
			return $http.post(urlpath("tweet/tweet_top20/"), data);
		},
		user_similarity10: function(username){
			return $http.post(urlpath("user/user_similarity10/"),username);
		}
	};
}]);