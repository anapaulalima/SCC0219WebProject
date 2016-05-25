var app = angular.module('correileganteApp', [
    'ngRoute',
    'correilegante-parser',
    'ui-notification',
    'ui.select',
    'ngCookies'
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

app.controller('menuCtrl', function($scope){

});

app.controller('indexCtrl', function($scope){

});

app.controller('loginCtrl', function($scope, $location, Notification, Auth){
    $scope.onSubmit = function(){
        var formdata = {
            username : $scope.username,
            password : $scope.password
        };
        Auth.login(formdata).success(function(data){
            Notification.success("Login successfully!");
            $location.path('/timeline/');
        }).catch(function(data){
            Notification.error("Login failed!");

        });

    }
});

app.controller('reportCtrl', function($scope){
    
});

app.controller('perfilCtrl', function($scope, Account, Notification){
    Account.me().success(function(data){
        $scope.user = data;
        $scope.user.photo="https://s3.amazonaws.com/contactsstorage/photo/fernando-pessoa.jpg";
        //corta a foto de forma inteligente
        defaultcrop();
    }).catch(function(data){
        Notification.error("Unable to locate profile.");
    });

    $scope.posts = []; 
    $scope.addPost = function(){
        $scope.posts.push({title: $scope.title, text:$scope.post, author: "ana", postDate:parseDate()});
        $scope.post = "";
        $scope.title = "";
        console.log($scope.posts);
    }
    //Backend deve fazer essa variavel ser true se estiver vendo o proprio perfil e false se não
    $scope.myself = true;
});

app.controller('groupsCtrl', function($scope){
    $scope.groups = [];
    $scope.groups.push({name: "family", id: 1, users: ["oioioi", "feliz"]});
    $scope.groups.push({name: "school", id: 2, users: ["ana", "didio"]});
    $scope.groups.push({name: "theGuys", id: 3, users: ["tonho", "carlos"]});
});

app.controller('searchUserCtrl', function($scope){
    $scope.users = [];
    $scope.users.push({username: "aniinharl", bio: "oioioi"});
    $scope.users.push({username: "giovanemocellin", bio: "olar"});
    $scope.users.push({username: "antonioplm", bio: "nenhuma descricao"});
});


app.controller('postsCtrl', function($scope, $routeParams){
	$scope.posts = []; 
	$scope.addPost = function(){
		$scope.posts.push({title: $scope.title, text:$scope.post, author: "ana", postDate:parseDate()});
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
        'editable' : false,
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

app.controller('timelineCtrl', function($scope, $location, Notification){
    
});

app.controller('changeDBCtrl', function($scope, $location, Notification){
    $scope.downloadFile = function(){
    }
    $scope.uploadFile = function(){
    }
});

app.controller('editUserCtrl', function($scope, $location, Notification){
    //backend pega os dados do usuário atual
    $scope.formdata = {
        'login' : 'aniinharl',
        'password' : '123456',
        'name' : 'Ana Paula dos Reis Lima',
        'bio' : 'Sou legal mesmo',
        'birthday' : '21-10-1995'
    }
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
        
    $scope.deleteUser = function(){
        Notification.success("User deleted!");
        $location.path('/login/');
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

app.controller('openGroupCtrl', function($scope, $location, Notification, $routeParams){
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
/*app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/Text/:pagina',{
			templateUrl: 'routeTest.html',
			controller: RouteControler
		});
});*/