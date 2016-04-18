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
        .otherwise({
            redirectTo: '/'
        });
        
        $locationProvider.html5Mode(true);
    }])