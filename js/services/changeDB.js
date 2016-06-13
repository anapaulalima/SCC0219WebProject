angular.module("correileganteApp").factory('ChangeDB', ['$http', 'Upload', function($http, Upload){
	return {
		uploadDB: function(files){
			if (typeof files === 'undefined' || files == null)
				throw Error;

			return Upload.upload({
                        method: 'POST',
                        url: urlpath('uploaddb'),
                        data: {file: files}//,
                        //headers: { 'X-Auth-Token':getLocalToken() }
                    });
		},
		downloadDB: function(){
			return $http.get(urlpath("logout"));
		}
	};
}]);