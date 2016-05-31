angular.module('correileganteApp').controller('loginCtrl', function($scope, $location, Notification, Auth, $cookieStore){
    $scope.onSubmit = function(){
        var formdata = {
            username : $scope.username,
            password : $scope.password
        };
        Auth.login(formdata).success(function(data){
            Notification.success("Login successfully!");
            //$cookieStore.put("loggedIn", "true");
            //$scope.$emit("updateHeader");
            console.log(data);
            $location.path("/timeline/");
        }).catch(function(data){
            Notification.error("Login failed!");
        });
    }
});