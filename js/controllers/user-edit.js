angular.module('correileganteApp').controller('editUserCtrl', function($scope, $location, Users, Account, Notification){
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
        if($.trim($scope.formdata.username).length == 0){
            $scope.formerror.username = "You can't use only white spaces.";
        } else {
            Account.update_user($scope.formdata, $scope.f_photo).success(function(data){
                if (data.status == "success"){
                    Notification.success("User updated");
                    $location.path("/timeline/");
                } else {
                    Notification.error("Couldn't edit user");
                }
            }).catch(function(data){
                Notification.error("Couldn't edit user");
            });
        }
    };
      
    $scope.changePassword = function(){
        $location.path('/editPassword/');
    };

    $scope.deleteUser = function(){
        Users.delete().success(function(data){
            if (data.status=="success"){
                Notification.success("User deleted");
                $location.path('/login/');
            } else {
                Notification.error("Unable to delete");
            }
        }).catch(function(data){
            Notification.error("Unable to delete");
        });
        
    };

});