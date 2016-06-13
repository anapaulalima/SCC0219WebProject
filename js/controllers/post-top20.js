angular.module('correileganteApp').controller('postTop20Ctrl', function($scope, $routeParams, Notification, Report, $location, $routeParams){
	$scope.PageTitle = "Top 20 Posts";
	$scope.posts = {};
    begin = $routeParams.date.split("--")[0];
    end = $routeParams.date.split("--")[1];
    sendData = {};
    sendData.formdata = {};
    sendData.formdata.date_ini = begin;
    sendData.formdata.date_end = end;
    Report.post_top20(sendData).success(function(data){
        if(data.status == "success"){
            $scope.posts = data.response;
        } else {
            Notification.error("Unable to generate report 1");
            $location.path("/timeline");
        }
    }).catch(function(data){
        Notification.error("Unable to generate report 2");
        $location.path("/timeline");
    });
});