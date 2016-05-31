angular.module('correileganteApp').controller('groupsCtrl', function($scope){
    $scope.groups = [];
    $scope.groups.push({name: "family", id: 1, users: ["oioioi", "feliz"]});
    $scope.groups.push({name: "school", id: 2, users: ["ana", "didio"]});
    $scope.groups.push({name: "theGuys", id: 3, users: ["tonho", "carlos"]});
});