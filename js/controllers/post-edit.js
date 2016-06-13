angular.module('correileganteApp').controller('editPostCtrl', function($scope, $routeParams, $location, $rootScope, Notification, Post){
    // Backend pega os dados do post
    $scope.post = {};
    $scope.post.text = "";
    Post.get($routeParams.id).success(function(data){
        $scope.post = data;
    }).catch(function(data){
        Notification.error("Unable to load post");
        $location.path("/timeline/");
    });
    //Backend guarda os dados atualizados por service
    $scope.editPost = function(){
        $scope.post.user = $rootScope.localUser.user.id;
        Post.edit({"formdata": $scope.post}).success(function(data){
            if(data.status=="error") {
                Notification.error("Unable to edit post");
            } else {
                Notification.success("Post edited");
                $location.path("/timeline/");
            }
        }).catch(function(data){
            Notification.error("Unable to edit post");
        });
	}
});