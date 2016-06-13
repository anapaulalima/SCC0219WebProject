angular.module('correileganteApp').controller('postsCtrl', function($scope, $routeParams){
	$scope.posts = []; 
	$scope.addPost = function(){
		$scope.posts.push({title: $scope.title, text:$scope.post, author: "ana", postDate:parseDate()});
        $scope.post = "";
        $scope.title = "";
	}
    //Backend deve fazer essa variavel ser true se estiver vendo o proprio perfil e false se não
    $scope.myself = false;
});