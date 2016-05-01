var app = angular.module('correileganteApp', [
    'ngRoute',
    'correilegante-parser',
    'ui-notification'
]);

app.config(function(NotificationProvider){
   NotificationProvider.setOptions({
       startTop: 20,
       startRight: 10,
       verticalSpacing: 20,
       horizontalSpacing: 20,
       positionX: 'right',
       positionY: 'top'
       
   }); 
});

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

app.controller('PostsController', function($scope, $routeParams){
	$scope.posts = []; 
	$scope.addPost = function(){
		$scope.posts.push({title: $scope.title, text:$scope.post, author: username.get(), postDate:parseDate()});
        $scope.post = "";
        $scope.title = "";
		console.log($scope.posts);
	}
    //Backend deve fazer essa variavel ser true se estiver vendo o proprio perfil e false se não
    $scope.myself = false;
});

/*app.controller('RouteController', function($scope, $routeParams){
	$scope.params = $routeParams;

});*/

app.service('username', function(){
	this.get = function(){
		return 'ana';
	}
});


app.controller('detailsPostCtrl', function($scope, $routeParams, $location, Notification){
    // Backend Fazer chamada ao servidor para pedir os dados do post
    $scope.post = {
        'id' : $routeParams.id,
        'author' : 'ana',
        'user_nick' : '@analima',
        'title' : 'Titulo 1',
        'text' : 'Olá, @turma2016! A pedido do @joao, segue o vídeo da aula de hoje: $v:"https://upload.wikimedia.org/wikipedia/commons/9/96/Animaci%C3%B3n_Kizomba_B%C3%A1sico.ogg". O conteúdo é tranquilo... $i:"http://upload.wikimedia.org/wikipedia/commons/b/b7/Big_smile.png". Também foi indicado refletir sobre a frase do dia em $l:"http://www.lerolero.com/". Abraço! #aula #prova',
        'postDate' : '02/01/2016 20:34',
        'editable' : true,
        'like' : true,
        'dislike' : false
    }
    //Backend deleta post
    $scope.deletePost = function(){
        $("#delete-modal").modal('hide');
        Notification.success("Post deleted!");
        $location.path('/perfil');
    }
    //Backend compartilha post
    $scope.sharePost = function(){
        $("#share-modal").modal('hide');
        Notification.success("Post shared!");
        $location.path('/perfil');
    }
    //Backend guarda esses dados
    $scope.like = function(){
        console.log("like, like "+ $scope.post.like + " dislike " + $scope.post.dislike);
        if ($scope.post.like){
            $scope.post.like = false;
        } else {
            $scope.post.like = true;
            $scope.post.dislike = false;
        }
        console.log("like, like "+ $scope.post.like + " dislike " + $scope.post.dislike);
    }
    $scope.dislike = function(){
        console.log("dislike, like "+ $scope.post.like + " dislike " + $scope.post.dislike);
        if ($scope.post.dislike){
            $scope.post.dislike = false;
        } else {
            $scope.post.dislike = true;
            $scope.post.like = false;
        }
        console.log("dislike, like "+ $scope.post.like + " dislike " + $scope.post.dislike);
    }
});

app.controller('editPostCtrl', function($scope, $routeParams, $location){
    // Backend pega os dados do post
    $scope.post = {
        'id' : $routeParams.id,
        'author' : 'ana',
        'user_nick' : '@analima',
        'title' : 'Titulo 1',
        'title' : 'Taitulo 1',
        'text' : 'Olá, @turma2016! A pedido do @joao, segue o vídeo da aula de hoje: $v:"https://upload.wikimedia.org/wikipedia/commons/9/96/Animaci%C3%B3n_Kizomba_B%C3%A1sico.ogg". O conteúdo é tranquilo... $i:"http://upload.wikimedia.org/wikipedia/commons/b/b7/Big_smile.png". Também foi indicado refletir sobre a frase do dia em $l:"http://www.lerolero.com/". Abraço! #aula #prova',
        'postDate' : '02/01/2016 20:34'
    }
    //Backend guarda os dados atualizados por service
    $scope.editPost = function(){
		console.log({title: $scope.post.title, text:$scope.post.text, author: $scope.post.author, postDate:parseDate()});
        $location.path("/perfil/");
		console.log($scope.posts);
	}
});

app.controller('signUpCtrl', function($scope, $location, Notification){
    $scope.signUp = function(){
        $scope.formerror = {};
        //backend faz as verificações de todos os campos
        if($.trim($scope.formdata.login).length == 0){
            $scope.formerror.login = "You can't use only white spaces.";
        }
        //manda dados pro backend
        //retorna os erros que derem
        /* se der certo, $location.path("/login/");
        Notification.success("User registered!");*/
    }
});

app.controller('editUserCtrl', function($scope, $location, Notification){
    $scope.editUser = function(){
        $scope.formerror = {};
        //backend faz as verificações de todos os campos
        if($.trim($scope.formdata.login).length == 0){
            $scope.formerror.login = "You can't use only white spaces.";
        }
        //manda dados pro backend
        //retorna os erros que derem
        /* se der certo, $location.path("/login/");
        Notification.success("User registered!");*/
    }
});

app.controller('newGroupCtrl', function($scope, $location, Notification){
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

/*app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/Text/:pagina',{
			templateUrl: 'routeTest.html',
			controller: RouteControler
		});
});*/