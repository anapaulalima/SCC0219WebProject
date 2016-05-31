angular.module('correileganteApp').controller('newGroupCtrl', function($scope, $location, Notification){
    $scope.allUsers = [
        {id: 1, login: 'ana'},
        {id: 2, login: 'ana1'},
        {id: 3, login: 'ana2'},
        {id: 4, login: 'ana3'},
    ]
    $scope.newGroup = function(){
        
    }
    $('#users').select2();
});