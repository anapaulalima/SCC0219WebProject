angular.module('correileganteApp').controller('newGroupCtrl', function($scope, $location, Notification, Users, Group){
    $scope.action = "Create New";
    $scope.button = "Create";
    $scope.allUsers = [];
    $scope.formdata = {};
    $scope.formdata.id = null;
    Users.all().success(function(data){
    	$scope.allUsers = data;
    }).catch(function(data){
    	Notification.error("Unable to load users");
    	$location.path("/timeline/");
    });
    
    $scope.submitForm = function(){
    	var sendData = {};
    	sendData.name = $scope.formdata.name;
        sendData.id_users = [];
        for (var i = 0; i < $scope.formdata.users.length; i++){
            sendData.id_users.push($scope.formdata.users[i].id);
        }
        Group.set_group(sendData).success(function(data){
        	if(data.status=="success"){
        		Notification.success("Group created");
        		$location.path("/timeline/");
        	} else {
        		Notification.error("Unable to create group");
        	}
        }).catch(function(data){
        	Notification.error("Unable to create group");
        	$location.path("/timeline/");
        });
    }
    $('#users').select2();
});