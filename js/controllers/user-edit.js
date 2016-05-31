angular.module('correileganteApp').controller('editUserCtrl', function($scope, $location, Notification){
    //backend pega os dados do usuário atual
    $scope.formdata = {
        'login' : 'aniinharl',
        'password' : '123456',
        'name' : 'Ana Paula dos Reis Lima',
        'bio' : 'Sou legal mesmo',
        'birthday' : '21-10-1995'
    }
    $scope.editUser = function(){
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
        
    $scope.deleteUser = function(){
        Notification.success("User deleted!");
        $location.path('/login/');
    }
});