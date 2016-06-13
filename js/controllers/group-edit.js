angular.module('correileganteApp').controller('editGroupCtrl', function($scope, $location, $q, Notification, Group, Users, $routeParams){
    $scope.action = "Edit";
    $scope.button = "Edit";
    $scope.allUsers = [];
    $scope.formdata = {};
    $scope.formdata.id = $routeParams.id;

    $q.all([Users.all(), Group.details($routeParams.id)]).then(function(data){
        $scope.allUsers = data[0].data;
        $scope.formdata = data[1].data;
        $scope.formdata.users = data[1].data.members;
    }, function(data){
        Notification.error("Unable to open group to edit");
        $location.path("/groups/");
    });
    
    $scope.submitForm = function(){
        var sendData = {};
        sendData.name = $scope.formdata.name;
        sendData.members = [];
        for (var i = 0; i < $scope.formdata.users.length; i++){
            sendData.members.push($scope.formdata.users[i].id);
        }
        sendData.id = $scope.formdata.id;
        Group.set_group(sendData).success(function(data){
            if(data.status=="success"){
                Notification.success("Group edited");
                $location.path("/timeline/");
            } else {
                Notification.error("Unable to edit group");
            }
        }).catch(function(data){
            Notification.error("Unable to edit group");
            $location.path("/timeline/");
        });
    };

    $('#users').select2();
});