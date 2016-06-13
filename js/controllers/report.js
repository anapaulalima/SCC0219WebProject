angular.module('correileganteApp').controller('reportCtrl', function($scope, Users, Notification, $location){
	$scope.selectReport = 0;
    $scope.formdata = {};
    $scope.allUsers = [];
    $scope.formdata.username = null;

    Users.all().success(function(data){
        $scope.allUsers = data;
        console.log(data);
    }).catch(function(data){
        Notification.error("Unable to load users");
    });


	
    $scope.report = function(){
        if ($scope.selectReport == 1 || $scope.selectReport == 2){
            if ($scope.formdata.begin == ""){
                Notification.error("Begin date empty");
            } else {
                if ($scope.formdata.end == ""){
                    Notification.error("Begin date empty");
                } else {
                    var begin = $scope.formdata.begin.toJSON().substr(0, 10);
                    var end = $scope.formdata.end.toJSON().substr(0, 10);
                    if ($scope.selectReport == 1){
	    				$location.path("/userTop20/"+begin+"--"+end);
	    			} else {
	    				$location.path("/postTop20/"+begin+"--"+end);
	    			}
	    		}
	    	}
    	} else {
        	if ($scope.selectReport == 3){
        		if($scope.formdata.username == ""){
        			Notification.error("Username empty");
        		} else {
                    //console.log($scope.formdata);
        			$location.path("/userSimilarity10/"+$scope.formdata.username.username);
        		}
        	} else {
                Notification.error("Select a report type");
            }
        }
    	
    }

});