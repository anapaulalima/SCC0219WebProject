angular.module('correileganteApp').controller('loginCtrl', function($scope, $rootScope, $location, Notification, Auth, $cookieStore){
    $scope.onSubmit = function(){
        var formdata = {
            username : $scope.username,
            password : $scope.password
        };
        Auth.login(formdata).success(function(data){
            if (data.user){
                Notification.success("Login successfully!");
                $rootScope.localUser = data;
                $location.path("/timeline/");
            } else {
                Notification.error("Username or password doesn't match");
            }
        }).catch(function(data){
            Notification.error("Login failed!");
        });
    }
});