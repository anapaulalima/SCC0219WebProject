var app = angular.module('correileganteApp', [
    'ngRoute'
]);

app.controller('MenuController', function($scope){

});

app.controller('indexCtrl', function($scope){

});

app.controller('loginCtrl', function($scope, $location){
    $scope.onSubmit = function(){
        var username = $scope.username;
        var password = $scope.password;
        alert("username: " + username + "\nPassword: " + password);
        $location.path('/timeline/');
    }
});

app.controller('DataController', function($scope){
	
});

app.controller('PostsController', function($scope, username){
	$scope.posts = []; 
    //inicio de pedaço de codigo
    var str = "";
    var currentTime = new Date();
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    if (month < 10){
        str += "0";
    }
    str += month;
    if (day < 10){
        str += "0";
    }
    str += "/" + day + "/" + year;
    
    
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    str += " " + hours + ":" + minutes;
    //pedaço de código retirado de http://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript
	$scope.addPost = function(){
		$scope.posts.push({title: $scope.title, text:$scope.post, author: username.get(), postDate:str});
        $scope.post = "";
        $scope.title = "";
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