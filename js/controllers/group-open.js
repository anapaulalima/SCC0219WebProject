angular.module('correileganteApp').controller('openGroupCtrl', function($scope, $location, Notification, $routeParams){
    //backend pega os nomes de todos os usuários
    $scope.allUsers = [
        {id: 1, username: 'ana', name: "Ana Paula a"},
        {id: 2, username: 'ana1', name: "Ana Paula 1"},
        {id: 3, username: 'ana2', name: "Ana Paula 2"},
        {id: 4, username: 'ana3', name: "Ana Paula 3"},
    ]
    // $scope.preselected = [
    //     {id: 1, login: 'ana'},
    //     {id: 2, login: 'ana1'}
    // ]
    //backend pega o nome do grupo a ser editado e os usuários
    $scope.formdata = {
        'name' : 'USP',
        'id' : $routeParams.id,
        'users' : [
            {id: 1, username: 'ana', name: "Ana Paula a"},
            {id: 2, username: 'ana1', name: "Ana Paula 1"}
        ]
    };
    $scope.editGroup = function(){
        
    }
    $scope.deleteGroup = function(){
        Notification.success("Group deleted!");
        $location.path('/perfil/');
    }
});