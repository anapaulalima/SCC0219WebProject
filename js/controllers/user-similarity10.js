angular.module('correileganteApp').controller('userSimilarity10Ctrl', function($scope, Notification, $location, Report, $routeParams){
	$scope.pageTitle = "Similarity for one User";
	$scope.users = {};
    sendData = {};
    sendData.formdata = {};
    sendData.formdata.id = $routeParams.username;
	Report.user_similarity10(sendData).success(function(data){
        if(data.status == "success"){
            $scope.users = data.response;
        } else {
            console.log(data);
            Notification.error("Unable to generate report");
            $location.path("/timeline");
        }
    }).catch(function(data){
        console.log(data);
        Notification.error("Unable to generate report");
        $location.path("/timeline");
    });
});