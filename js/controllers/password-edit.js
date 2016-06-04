angular.module('correileganteApp').controller('editPasswordCtrl', function($scope, $location, Account, Notification){
	$scope.formdata = {}
	$scope.editPassword = function(){
        $scope.formerror = {};
        //backend faz as verificações de todos os campos
        
        //console.log($scope.formdata);
        Account.update_password({"formdata":$scope.formdata}).success(function(data){
        	console.log(data);
            if (data.status == "success"){
                Notification.success("Password changed");
                $location.path("/timeline/");
            } else {
            	if (data.status == "notpassword") {
	                Notification.error("Old Password doesn't match");
            	} else {
            		Notification.error("Couldn't edit Password");
            	}
            }
        }).catch(function(data){
            console.log(data);
            Notification.error("Couldn't edit Password");
        });
    }
});