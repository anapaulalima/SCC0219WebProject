angular.module('correileganteApp').controller('editPostCtrl', function($scope, $routeParams, $location){
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