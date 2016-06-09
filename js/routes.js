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
        .when('/editPassword/', {
            templateUrl: 'template/editPassword.html',
            controller: 'editPasswordCtrl'
        })
        .when('/newGroup/', {
            templateUrl: 'template/editGroup.html',
            controller: 'newGroupCtrl'
        })
        .when('/openGroup/:id', {
            templateUrl: 'template/openGroup.html',
            controller: 'openGroupCtrl'
        })
        .when('/editGroup/:id', {
            templateUrl: 'template/editGroup.html',
            controller: 'editGroupCtrl'
        })
        .when('/timeline/', {
            templateUrl: 'template/timeline.html',
            controller: 'timelineCtrl'
        })
        .when('/changeDB/', {
            templateUrl: 'template/changeDB.html',
            controller: 'changeDBCtrl'
        })
        .when('/search/:text', {
            templateUrl: 'template/searchResult.html',
            controller: 'searchCtrl'
        })
        .when('/report/', {
            templateUrl: 'template/report.html',
            controller: 'reportCtrl'
        })
        .when('/groups/', {
            templateUrl: 'template/myGroups.html',
            controller: 'groupsCtrl'
        })
        .when('/userTop20/:date', {
            templateUrl: 'template/usersReport.html',
            controller: 'userTop20Ctrl'
        })
        .when('/userSimilarity10/:username', {
            templateUrl: 'template/usersReport.html',
            controller: 'userSimilarity10Ctrl'
        })
        .when('/postTop20/:date', {
            templateUrl: 'template/postsReport.html',
            controller: 'postTop20Ctrl'
        })
        .otherwise({
            redirectTo: '/'
        });
        
        $locationProvider.html5Mode(true);
    }]);