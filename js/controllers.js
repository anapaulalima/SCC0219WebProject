var app = angular.module('bodyController', []);

app.controller('MenuController', function($scope){

});

app.controller('DataController', function($scope){
	
});

app.controller('PostsController', function($scope, username){
	$scope.posts = []; 
	$scope.addPost = function(post){
		$scope.posts.push(post + ' por ' + username.get());
		console.log($scope.posts);
	}
});

/*app.controller('RouteController', function($scope, $routeParams){
	$scope.params = $routeParams;

});*/

app.service('username', function(){
	this.get = function(){
		return 'ana';
	}
});

/*app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/Text/:pagina',{
			templateUrl: 'routeTest.html',
			controller: RouteControler
		});
});*/