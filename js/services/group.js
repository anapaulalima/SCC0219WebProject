angular.module("correileganteApp").factory('Group', ['$http', function($http){
	return {
		set_group: function(data){
			//console.log(data);
			return $http.post(urlpath("group/set_group"), data);
		},
		my_groups: function(){
			return $http.get(urlpath("group/my_groups"));
		},
		details: function(id){
			return $http.get(urlpath("group/"+id));
		},
		delete: function(data){
			return $http.post(urlpath("group/delete_group"), data);
		}
	};
}]);