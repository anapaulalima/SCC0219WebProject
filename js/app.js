angular.module('correileganteApp', [
    'ngRoute',
    'correilegante-parser',
    'ui-notification',
    'ui.select',
    'ngCookies',
    'ngFileUpload'
]).config(['$httpProvider',function($httpProvider) {
	$httpProvider.defaults.withCredentials = true;
}]).run(['$rootScope', 'Account', '$location', 'Notification', function($rootScope, Account, $location, Notification){
	if(!($location.$$path=="/changeDB/") && !($location.$$path=="/changeDB")){
		Account.me().success(function(data){
			//console.log($rootScope);
			if (data.status == "success"){
				setLocalUser(data, $rootScope);
			} else {
				Notification.error("Please, authenticate yourself");
				$location.path("/login/");
			}
		}).catch(function(data){
			Notification.error("Please, authenticate yourself");
			$location.path("/login/");
		});
	}
}]);