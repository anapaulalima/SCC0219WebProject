angular.module('correileganteApp', [
    'ngRoute',
    'correilegante-parser',
    'ui-notification',
    'ui.select',
    'ngCookies'
]).config(['$httpProvider',function($httpProvider) {
	$httpProvider.defaults.withCredentials = true;
}]).run(['$rootScope', 'Account', '$location', 'Notification', function($rootScope, Account, $location, Notification){
	Account.me().success(function(data){
		//console.log($rootScope);
		// if (data.status == "success"){
		// 	if (!$rootScope.localUser || $rootScope.localUser.user.id != data.user.id){
			if(data){
				setLocalUser(data, $rootScope);
			}
		// 	}
		// } else {
		// 	Notification.error("Please, authenticate yourself");
		// 	$location.path("/login/");
		// }
	}).catch(function(data){
		Notification.error("Please, authenticate yourself");
		$location.path("/login/");
	});
}]);