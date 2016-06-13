angular.module('correileganteApp').controller('signUpCtrl', function($scope, $location, Users, Notification){
    $scope.formerror = {};
    $scope.formdata = {};
    $scope.signUp = function(){
        $scope.formerror = {};
        if($.trim($scope.formdata.username).length == 0){
            $scope.formerror.username = "You can't use only white spaces.";
        } else {
           Users.new_user($scope.formdata, $scope.f_photo).success(function(data){
                if(data.status == "error"){
                    Notification.error("Couldn't create user");
                } else {
                    Notification.success("User created");
                    $location.path("/login/");
                }
            });
        }
    }
});