angular.module('correileganteApp').controller('searchCtrl', function($scope, $routeParams, $location, Notification, Users, Post){
    $scope.users = [];
    $scope.posts = [];
    errors = 0;
    $scope.searchText = "";
    $scope.text = $routeParams.text; 
    Users.search($routeParams.text).success(function(data){
    	if(data.status=="success"){
    		$scope.users = data.result;
    	} else {
    		Notification("Unable to search Users");
    		errors += 1;
    		if (errors == 2){
    			$location.path("/timeline/");
    		}
    	}
    }).catch(function(data){
    	Notification("Unable to search Users");
    	errors += 1;
    	if (errors == 2){
    		$location.path("/timeline/");
    	}
    });

    Post.search($routeParams.text).success(function(data){
    	if(data.status=="success"){
    		console.log(data);
    		$scope.posts = data.result;
    	} else {
    		Notification("Unable to search Posts");
    		errors += 1;
    		if (errors == 2){
    			$location.path("/timeline/");
    		}
    	}
    }).catch(function(data){
    	Notification("Unable to search Posts");
    	errors += 1;
    	if (errors == 2){
    		$location.path("/timeline/");
    	}
    });


});