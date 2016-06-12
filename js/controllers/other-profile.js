angular.module('correileganteApp').controller('otherProfileCtrl', function($scope, 
                                                                            $q, 
                                                                            Users, 
                                                                            Account,
                                                                            Post, 
                                                                            Notification, 
                                                                            $routeParams, 
                                                                            $location){
    $scope.myself = false;
    $scope.following = false;

    $scope.posts = []; 
    Account.me().success(function(data){
        if(data.status=='success'){
            if(data.user.username==$routeParams.username){
                $location.path("/profile/");
            }
        } else{
            Notification.error("Unable to locate profile");
        }
    }).catch(function(data){
        Notification.error("Unable to locate profile");
    });

    $q.all([Users.get($routeParams.username), Post.get_from_user($routeParams.username), Users.am_i_following($routeParams.username)]).then(
        function(data){
            if(data[0].data.status=="success" && data[1].data.status=="success" && data[2].data.status=="success"){
                $scope.user = data[0].data.user;
                $scope.user.photo=$scope.user.image_url;
                //corta a foto de forma inteligente
                defaultcrop();
                $scope.posts = data[1].data.result;
                $scope.posts.reverse();
                $scope.following = data[2].data.following;
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

    $scope.follow = function(){
        //console.log("seguir");
        if (!$scope.following){
            Users.follow($routeParams.username).success(function(data){
                if(data.status=="success"){
                    $scope.following = true;
                }  else {
                    Notification.error("Unable to follow");
                }  
            }).catch(function(data){
                Notification.error("Unable to follow");
            });
        } else {
            Users.unfollow($routeParams.username).success(function(data){
                if(data.status=="success"){
                    $scope.following = false;
                }  else {
                     Notification.error("Unable to unfollow");
                }  
            }).catch(function(data){
                Notification.error("Unable to unfollow");
            });
        }
    }
});
