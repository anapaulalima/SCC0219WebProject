angular.module('correileganteApp').controller('changeDBCtrl', function($scope, $location, ChangeDB, Notification){
    $scope.url_download = urlpath("downloaddb.json");
    $scope.downloadFile = function(){

    };
    $scope.uploadFile = function(){
    	console.log({"scope": $scope.f_upload})
    	ChangeDB.uploadDB($scope.f_upload).success(function(data){
            if(data.status == "success"){
                Notification.success("Database successfully uploaded!!! =) Thanks GOD");
            } else {
                Notification.error("Error while uploading, please contact the administrators. =(");     
            }
    	}).catch(function(data){
    		Notification.error("Error while uploading, please contact the administrators. =(");
    	});
    };
});