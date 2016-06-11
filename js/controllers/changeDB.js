angular.module('correileganteApp').controller('changeDBCtrl', function($scope, $location, ChangeDB, Notification){
    $scope.url_download = urlpath("downloaddb.json");
    $scope.downloadFile = function(){

    };
    $scope.uploadFile = function(){
    	console.log({"scope": $scope.f_upload})
    	ChangeDB.uploadDB($scope.f_upload).success(function(data){
    		console.log(data);
    		console.log("success");
    	}).catch(function(data){
    		console.log(data);
    	});
    };
});