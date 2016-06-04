angular.module('correileganteApp').controller('editUserCtrl', function($scope, $location, Account, Notification){
    $scope.formerror = {};
    $scope.formdata = {};
    Account.me().success(function(data){
        if(data.status=='success'){
            $scope.formdata = data.user;
            $scope.formdata.birthday_date = new Date($scope.formdata.birthday);
        } else {
            Notification.error("Unable to locate profile");
        }
    }).catch(function(data){
        Notification.error("Unable to locate profile");
    });

    $scope.editUser = function(){
        $scope.formerror = {};
        //backend faz as verificações de todos os campos
        if($.trim($scope.formdata.username).length == 0){
            $scope.formerror.username = "You can't use only white spaces.";
        } else {
            console.log($scope.formdata);
            Account.update_user({"formdata":$scope.formdata}).success(function(data){
                if (data.status == "success"){
                    Notification.success("User updated");
                    $location.path("/timeline/");
                } else {
                    console.log(data);
                    Notification.error("Couldn't edit user");
                }
            }).catch(function(data){
                console.log(data);
                Notification.error("Couldn't edit user");
            });
        }
    }
      
    $scope.changePassword = function(){
        $location.path('/editPassword/');
    }

    $scope.deleteUser = function(){
        Notification.success("User deleted!");
        $location.path('/login/');
    }

});