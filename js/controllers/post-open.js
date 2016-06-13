angular.module('correileganteApp').controller('detailsPostCtrl', function($scope, $routeParams, $rootScope, $q, Post, Reaction, $location, Notification){
    $scope.post = {};
    $scope.post.text = "";
    $scope.post.like = false;
    $scope.post.dislike = false;
    $q.all([Post.get($routeParams.id), Reaction.my_reaction($routeParams.id)]).then(function(data){
            if(data[1].data.status=="success"){
                $scope.post = data[0].data;
                if(data[1].data.found){
                    if (data[1].data.found.rate == 1){
                        $scope.post.like = true;
                    } else {
                        $scope.post.dislike = true;
                    }
                }
            } else {
                Notification.error("Unable to load post");
                $location.path("/timeline/");
            }
        },
        function(data){
            Notification.error("Unable to load post");
            $location.path("/timeline/");
        }
    );

    $scope.deletePost = function(){
        $("#delete-modal").modal('hide');
        data = {};
        data.formdata = {};
        data.formdata.id = $scope.post.id;
        Post.delete(data).success(function(data){
            if(data.status=="success"){
                Notification.success("Post deleted");
                $location.path('/timeline/');
            } else {
                Notification.error("Unable to delete");
            }
        }).catch(function(data){
            Notification.error("Unable to delete");
        });
    }; 

    $scope.sharePost = function(){
        $("#share-modal").modal('hide');
        data = {};
        data.formdata = {};
        data.formdata.retweet = $scope.post.id;
        Post.share(data).success(function(data){
            if(data.status=="success"){
                Notification.success("Post shared");
                $location.path('/timeline/');
            } else {
                Notification.error("Unable to share post");
            }
        }).catch(function(data){
            Notification.error("Unable to share post");
        });   
    };

    $scope.like = function(){
        var sendData = {};
        sendData.formdata = {};
        sendData.formdata.tweet = $scope.post.id;
        sendData.formdata.rate = 1;
        Reaction.set_reaction(sendData).success(function(data){
            if(data.status=="success"){
                if(!$scope.post.like){
                    $scope.post.like = true;
                    $scope.post.dislike = false;
                } else {
                    $scope.post.like = false;
                }
                Notification.success("Reacted");
            } else {
                Notification.error("Unable to react");
            }
        }).catch(function(){
            Notification.error("Unable to react");
        });
    };

    $scope.dislike = function(){
        var sendData = {};
        sendData.formdata = {};
        sendData.formdata.tweet = $scope.post.id;
        sendData.formdata.rate = 0;
        Reaction.set_reaction(sendData).success(function(data){
            if(data.status=="success"){
                if(!$scope.post.dislike){
                    $scope.post.dislike = true;
                    $scope.post.like = false;
                } else {
                    $scope.post.dislike = false;
                }
                Notification.success("Reacted");
            } else {
                Notification.error("Unable to react");
            }
        }).catch(function(){
            Notification.error("Unable to react");
        });
    };
});