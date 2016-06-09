angular.module('correileganteApp').controller('reportCtrl', function($scope, Notification, $location){
	$scope.selectReport = 0;
    $scope.formdata = {};
	
    $scope.report = function(){
    	if ($scope.selectReport == 1 || $scope.selectReport == 2){
    		if ($scope.begin == ""){
    			Notification.error("Begin date empty");
    		} else {
	    		if ($scope.end == ""){
	    			Notification.error("Begin date empty");
	    		} else {
	    			if ($scope.selectReport == 1){
                        console.log($scope.formdata);
	    				$location.path("/userTop20/"+$scope.formdata.begin+"--"+$scope.formdata.end);
	    			} else {
                        console.log($scope.formdata);
	    				$location.path("/postTop20/"+$scope.formdata.begin+"--"+$scope.formdata.end);
	    			}
	    		}
	    	}
    	} else {
        	if ($scope.selectReport == 3){
        		if($scope.username == ""){
        			Notification.error("Username empty");
        		} else {
                    console.log($scope.formdata);
        			$location.path("/userSimilarity10/"+$scope.formdata.username);
        		}
        	} else {
                Notification.error("Select a report type");
            }
        }
    	
    }
});