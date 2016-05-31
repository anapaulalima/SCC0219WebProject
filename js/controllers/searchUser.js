angular.module('correileganteApp').controller('searchUserCtrl', function($scope){
    $scope.users = [];
    $scope.users.push({username: "aniinharl", bio: "oioioi"});
    $scope.users.push({username: "giovanemocellin", bio: "olar"});
    $scope.users.push({username: "antonioplm", bio: "nenhuma descricao"});
});