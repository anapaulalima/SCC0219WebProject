angular.module('correileganteApp').controller('signUpCtrl', function($scope, $location, Users, Notification){
    $scope.formerror = {};
    $scope.formdata = {};
    $scope.signUp = function(){
        $scope.formerror = {};
        //console.log($scope.formdata);
        if($.trim($scope.formdata.username).length == 0){
            $scope.formerror.username = "You can't use only white spaces.";
        } else {
           Users.new_user($scope.formdata).success(function(data){
                if(data.status == "error"){
                    Notification.error("Couldn't creat user");
                } else {
                    Notification.success("User created");
                    $location.path("/login/");
                }
            });
        }

        //manda dados pro backend
        //retorna os erros que derem
        /* se der certo, $location.path("/login/");
        Notification.success("User registered!");*/
    }
});