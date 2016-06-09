angular.module("correileganteApp").factory('Report', ['$http', function($http){
	return {
		user_top20: function(date){
			return $http.get(urlpath("user/user_top20/"+date));
		},
		post_top20: function(date){
			return $http.get(urlpath("tweet/tweet_top20/"+date));
		},
		user_similarity10: function(username){
			return $http.get(urlpath("user/user_similar10/"+username));
		}
	};
}]);