angular.module('correileganteApp').controller('postTop20Ctrl', function($scope, Notification, Report, $location, $routeParams){
	$scope.pageTitle = "Top 20 Posts";
	$scope.posts = {};
	Report.post_top20($routeParams.date).success(function(data){
        if(data.status == "success"){
            $scope.posts = data.result;
        } else {
            Notification.error("Unable to generate report");
            $location.path("/timeline");
        }
    }).catch(function(data){
        Notification.error("Unable to generate report");
            $location.path("/timeline");
    });
});