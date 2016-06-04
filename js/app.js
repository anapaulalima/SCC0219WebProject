angular.module('correileganteApp', [
    'ngRoute',
    'correilegante-parser',
    'ui-notification',
    'ui.select',
    'ngCookies'
]).config(['$httpProvider',function($httpProvider) {
	$httpProvider.defaults.withCredentials = true;
}]).run(['$rootScope', 'Account', function($rootScope, Account){
	Account.me().success(function(data){
		setLocalUser(data, $rootScope);
	}).catch();
}]);