angular.module('correileganteApp').controller('openGroupCtrl', function($scope, $location, Notification, Group, $routeParams){
    $scope.group = {};
    Group.details($routeParams.id).success(function(data){
        $scope.group = data;
    }).catch (function(data){
        Notification.error("Unable to open group");
        $location.path("/timeline/");
    });
});