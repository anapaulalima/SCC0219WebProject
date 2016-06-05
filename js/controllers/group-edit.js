angular.module('correileganteApp').controller('editGroupCtrl', function($scope, $location, $q, Notification, Group, Users, $routeParams){
    $scope.action = "Edit";
    $scope.button = "Edit";
    $scope.allUsers = [];
    $scope.formdata = {};
    $scope.formdata.id = $routeParams.id;
    console.log("qualquer string1");

    $q.all([Users.all(), Group.details($routeParams.id)]).then(function(data){
        $scope.allUsers = data[0].data;
        $scope.formdata = data[1].data;
        $scope.formdata.users = data[1].data.members;
        console.log("qualquer string2");
    }, function(data){
        Notification.error("Unable to open group to edit");
        $location.path("/groups/");
    });
    
    $scope.submitForm = function(){
        console.log("qualquer string");
        var sendData = {};
        sendData.name = $scope.formdata.name;
        sendData.members = [for (u of $scope.formdata.users) u.id];
        sendData.id = $scope.formdata.id;
        console.log(sendData);
        Group.set_group(sendData).success(function(data){
            if(data.status=="success"){
                Notification.success("Group edited");
                $location.path("/timeline/");
            } else {
                console.log(data);
                Notification.error("Unable to edit group");
            }
        }).catch(function(data){
            console.log(data);
            Notification.error("Unable to edit group");
            $location.path("/timeline/");
        });
    };

    $scope.delete = function(){
        console.log("chamei o delete");
        var sendData = {name: $scope.formdata.name};
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

    $('#users').select2();
});