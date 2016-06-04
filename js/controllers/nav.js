angular.module('correileganteApp').controller('navCtrl', function($scope, $rootScope, $location, Notification, Account){
    $scope.logout = function(){
    	Account.logout().success(function(data){
    		Notification.success("Logged out");
    		deleteLocalUser($rootScope);
    		$location.path("/login/");
    	}).catch(function(data){
    		Notification.error("Unable to log out. Try again");
    	})
    }
});