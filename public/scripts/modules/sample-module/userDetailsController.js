define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('UserDetailsCtr', ['$scope', '$log', 'PredixAssetService', 'PredixViewService', '$http', function ($scope, $log, PredixAssetService, PredixViewService, $http) {
    	
    	//module

    	  
    	  $http.get('http://localhost:8080/hello/retrieve').success(function(data) {
    		         $scope.user = data;
    		    });
    	  $http.get('http://localhost:8080/hello/allDps').success(function(data) {
 	         $scope.dpData = data;
 	    });
    	  
    	  
    	  
    	
    }]);
});



