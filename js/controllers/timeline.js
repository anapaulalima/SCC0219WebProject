angular.module('correileganteApp').controller('timelineCtrl', function($scope, $location, Post, Notification){
    $scope.posts = [];
    console.log("entrei na timeline");
    Post.get_timeline().success(function(data){
    	console.log(data);
    	if (data.status == "error"){
    		Notification.error("Unable to load timeline");
    	} else {
    		$scope.posts = data.result;
    		console.log($scope.posts);
    	}
    });

    $scope.addPost = function(){
        //console.log($scope);
        Post.new({"formdata": $scope.newpost}).success(function(data){
            console.log(data);
            if(data.status=="error") {
                Notification.error("Unable to create post");
            } else {
                $scope.posts.splice(0, 0, data.post);
                $scope.newpost.title = "";
                $scope.newpost.text = "";
                Notification.success("Post created");
            }
        }).catch(function(data){
            //console.log(data);
            Notification.error("Unable to create post");
        });
    }
});