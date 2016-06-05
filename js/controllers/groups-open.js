angular.module('correileganteApp').controller('groupsCtrl', function($scope, $location, Notification, Group){
    $scope.memberOf = [];
    $scope.ownerOf = []; 
    
    

    Group.my_groups().success(function(data){
    	if(data.status = "success"){
            $scope.memberOf = data.memberOf;
            $scope.ownerOf = data.result;
    	} else {
    		Notification.error("Unable to load groups");
    	}
    }).catch(function(data){
    	Notification.error("Unable to load groups");
    });
});