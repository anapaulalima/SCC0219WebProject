angular.module('correileganteApp').controller('myProfileCtrl', function($scope, $q, Account, Post, Notification, $rootScope){
    $scope.newpost = {};
    $q.all([Account.me(), Post.get_from_user($rootScope.localUser.user.username)]).then(
        function(data){
            if(data[0].data.status=="success" && data[1].data.status=="success"){
                $scope.user = data[0].data.user;
                $scope.user.photo=$scope.user.image_url;
                //corta a foto de forma inteligente
                defaultcrop();
                $scope.posts = data[1].data.result;
                $scope.posts.reverse();
            } else {
                Notification.error("Unable to locate profile.");
                $location.path("/timeline/");
            }
        },
        function(data){
            Notification.error("Unable to locate profile.");
            $location.path("/timeline/");
        }
    );

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
    $scope.myself = true;
});
