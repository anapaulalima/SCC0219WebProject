angular.module("correileganteApp").factory('Post', ['$http', function($http){
	return {
		new: function(data){
			return $http.post(urlpath("tweet/new_tweet"), data);
		},
		get: function(id){
			return $http.get(urlpath("tweet/"+id));
		},
		get_from_user: function(id){
			return $http.post(urlpath("tweet/tweets_from_user"),{user:id});
		},
		get_timeline: function(){
			return $http.get(urlpath("tweet/following_posts"));
		},
		share: function(data){
			return $http.post(urlpath("tweet/retweet"), data);
		},
		edit: function(data){
			return $http.post(urlpath("tweet/update_tweet"), data);
		}
	};
}]);