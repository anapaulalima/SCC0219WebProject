angular.module('correileganteApp').controller('userTop20Ctrl', function($scope, Notification, Report, $routeParams, $location){
	$scope.pageTitle = "Top 20 Users";
    $scope.users = {};
    Report.user_top20($routeParams.date).success(function(data){
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