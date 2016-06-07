angular.module('correileganteApp').controller('openGroupCtrl', function($scope, $location, Notification, Group, $routeParams){
    $scope.group = {};
    Group.details($routeParams.id).success(function(data){
        $scope.group = data;
    }).catch (function(data){
        Notification.error("Unable to open group");
        $location.path("/timeline/");
    });

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