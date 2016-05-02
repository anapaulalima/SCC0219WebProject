angular.module('correileganteApp')
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider
        .when('/',{
              templateUrl: 'template/index.html',
              controller: 'indexCtrl'
              })
        .when('/login/', {
            templateUrl: 'template/login.html',
            controller: 'loginCtrl'
        })
        .when('/timeline/', {
            templateUrl: 'template/timeline.html',
            controller: 'loginCtrl'
        })
        .when('/perfil/', {
            templateUrl: 'template/perfil.html',
            controller: 'loginCtrl'
        })
        .when('/details/:id/', {
            templateUrl: 'template/openPost.html',
            controller: 'detailsPostCtrl'
        })
        .when('/editPost/:id/', {
            templateUrl: 'template/editPost.html',
            controller: 'editPostCtrl'
        })
        .when('/signup/', {
            templateUrl: 'template/signup.html',
            controller: 'signUpCtrl'
        })
        .when('/editUser/', {
            templateUrl: 'template/editUser.html',
            controller: 'editUserCtrl'
        })
        .when('/newGroup/', {
            templateUrl: 'template/newGroup.html',
            controller: 'newGroupCtrl'
        })
        .when('/openGroup/', {
            templateUrl: 'template/openGroup.html',
            controller: 'openGroupCtrl'
        })
        .when('/timeline/', {
            templateUrl: 'template/timeline.html',
            controller: 'timelineCtrl'
        })
        .when('/changeDB/', {
            templateUrl: 'template/changeDB.html',
            controller: 'changeDBCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
        
        $locationProvider.html5Mode(true);
    }])