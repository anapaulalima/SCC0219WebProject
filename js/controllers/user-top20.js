angular.module('correileganteApp').controller('userTop20Ctrl', function($scope, Notification, Report, $routeParams, $location){
	$scope.pageTitle = "Top 20 Users";
    $scope.users = {};
    begin = $routeParams.date.split("--")[0];
    end = $routeParams.date.split("--")[1];
    sendData = {};
    sendData.formdata = {};
    sendData.formdata.date_ini = begin;
    sendData.formdata.date_end = end;
    Report.user_top20(sendData).success(function(data){
        if(data.status == "success"){
            
            $scope.users = data.response;
        } else {
            Notification.error("Unable to generate report 1");
            $location.path("/timeline");
        }
    }).catch(function(data){
        Notification.error("Unable to generate report 2");
        $location.path("/timeline");
    });
});