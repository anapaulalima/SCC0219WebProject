angular.module('correileganteApp').controller('openGroupCtrl', function($scope, $location, Notification, Group, $routeParams){
    $scope.group = {};
    var idInt = parseInt($routeParams.id);
    console.log(idInt);
    sendData = {};
    sendData.name = $routeParams.id;
    if(idInt){
        console.log("entrei onde n deveria");
        Group.details($routeParams.id).success(function(data){
            $scope.group = data;
        }).catch (function(data){
            Notification.error("Unable to open group");
            $location.path("/timeline/");
        });
    } else {
        Group.details_name($routeParams.id).success(function(data){
            if(data.status == "success"){
                console.log(data);
                $scope.group = data.result;
            } else {
                Notification.error("Unable to open group");
                $location.path("/timeline/");
            }
        }).catch (function(data){
            Notification.error("Unable to open group");
            $location.path("/timeline/");
        });
    }

    $scope.delete = function(){
        var sendData = {name: $scope.group.name};
        Group.delete(sendData).success(function(data){
            if (data.status=="success"){
                Notification.success("Group deleted");
                $location.path("/timeline/");
            } else {
                Notification.error("Unable to delete group");
            }
        }).catch(function(data){
            Notification.error("Unable to delete group");
        });
    };
});