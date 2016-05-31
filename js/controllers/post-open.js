angular.module('correileganteApp').controller('detailsPostCtrl', function($scope, $routeParams, $location, Notification){
    // Backend Fazer chamada ao servidor para pedir os dados do post
    $scope.post = {
        'id' : $routeParams.id,
        'author' : 'ana',
        'user_nick' : '@analima',
        'title' : 'Titulo 1',
        'text' : 'Olá, @turma2016! A pedido da @aniinharl, segue o vídeo da aula de hoje: $v:"https://upload.wikimedia.org/wikipedia/commons/9/96/Animaci%C3%B3n_Kizomba_B%C3%A1sico.ogg". O conteúdo é tranquilo... $i:"http://upload.wikimedia.org/wikipedia/commons/b/b7/Big_smile.png". Também foi indicado refletir sobre a frase do dia em $l:"http://www.lerolero.com/". Abraço! #aula #prova',
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