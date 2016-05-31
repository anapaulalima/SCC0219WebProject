angular.module('correileganteApp').controller('otherProfileCtrl', function($scope, Users, Account, Notification, $routeParams, $location){
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
    Users.get($routeParams.username).success(function(data){
        console.log(data);
        if(data.status == "error"){
            Notification.error("Unable to locate profile.");
            $location.path("/timeline/");
        } else {
            $scope.user = data.user;
            $scope.user.photo="https://s3.amazonaws.com/contactsstorage/photo/fernando-pessoa.jpg";
            //corta a foto de forma inteligente
            defaultcrop();
        }   
    }).catch(function(data){
        console.log(data);
        Notification.error("Unable to locate profile.");
        $location.path("/timeline/");
    });

    $scope.posts = []; 
   
    $scope.myself = false;
});
