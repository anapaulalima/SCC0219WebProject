angular.module('correileganteApp').controller('signUpCtrl', function($scope, $location, Notification){
    $scope.signUp = function(){
        $scope.formerror = {};
        //backend faz as verificações de todos os campos
        if($.trim($scope.formdata.login).length == 0){
            $scope.formerror.login = "You can't use only white spaces.";
        }
        //manda dados pro backend
        //retorna os erros que derem
        /* se der certo, $location.path("/login/");
        Notification.success("User registered!");*/
    }
});