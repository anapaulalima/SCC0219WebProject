angular.module('correileganteApp', [
    'ngRoute',
    'correilegante-parser',
    'ui-notification',
    'ui.select',
    'ngCookies'
]).config(['$httpProvider',function($httpProvider) {
	$httpProvider.defaults.withCredentials = true;
}]).run(['$rootScope', function($rootScope){
	setLocalUser(localStorage['localUser'], $rootScope);
}]);