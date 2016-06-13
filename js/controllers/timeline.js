angular.module('correileganteApp').controller('timelineCtrl', function($scope, $location, Post, Notification){
    $scope.posts = [];
    Post.get_timeline().success(function(data){
    	if (data.status == "error"){
    		Notification.error("Unable to load timeline");
    	} else {
    		$scope.posts = data.result;
    	}
    });

    $scope.addPost = function(){
        Post.new({"formdata": $scope.newpost}).success(function(data){
            if(data.status=="error") {
                Notification.error("Unable to create post");
            } else {
                $scope.posts.splice(0, 0, data.post);
                $scope.newpost.title = "";
                $scope.newpost.text = "";
                Notification.success("Post created");
            }
        }).catch(function(data){
            Notification.error("Unable to create post");
        });
    }
});