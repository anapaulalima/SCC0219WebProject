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
            controller: 'timelineCtrl'
        })
        .when('/profile/:username', {
            templateUrl: 'template/profile.html',
            controller: 'otherProfileCtrl'
        })
        .when('/profile/', {
            templateUrl: 'template/profile.html',
            controller: 'myProfileCtrl'
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
        .when('/openGroup/:id', {
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
        .when('/searchResult/', {
            templateUrl: 'template/searchUserResult.html',
            controller: 'searchUserCtrl'
        })
        .when('/report/', {
            templateUrl: 'template/report.html',
            controller: 'reportCtrl'
        })
        .when('/groups/', {
            templateUrl: 'template/myGroups.html',
            controller: 'groupsCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
        
        $locationProvider.html5Mode(true);
    }]);