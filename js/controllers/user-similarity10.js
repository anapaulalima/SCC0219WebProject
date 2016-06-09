angular.module('correileganteApp').controller('userSimilarity10Ctrl', function($scope, Notification, $location, Report, $routeParams){
	$scope.pageTitle = "Similarity for ";
	$scope.users = {};
	Report.user_similarity10($routeParams.username).success(function(data){
        if(data.status == "success"){
            $scope.users = data.result;
        } else {
            Notification.error("Unable to generate report");
            $location.path("/timeline");
        }
    }).catch(function(data){
        Notification.error("Unable to generate report");
            $location.path("/timeline");
    });
});