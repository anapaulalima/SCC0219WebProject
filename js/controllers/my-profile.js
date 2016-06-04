angular.module('correileganteApp').controller('myProfileCtrl', function($scope, Account, Post, Notification){
    $scope.newpost = {};
    Account.me().success(function(data){
        if(data.status=='success'){
            $scope.user = data.user;
            $scope.posts = data.user.tweet_set.reverse();
            for (var p in $scope.posts){
                $scope.posts[p].user = $scope.user;
            }
            $scope.user.photo="https://s3.amazonaws.com/contactsstorage/photo/fernando-pessoa.jpg";
            //corta a foto de forma inteligente
            defaultcrop();
        } else{
            Notification.error("Unable to locate profile");
        }
    }).catch(function(data){
        //console.log(data);
        Notification.error("Unable to locate profile");
    });

    $scope.addPost = function(){
        //console.log($scope);
        Post.new({"formdata": $scope.newpost}).success(function(data){
            //console.log(data);
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
    $scope.myself = true;
});
