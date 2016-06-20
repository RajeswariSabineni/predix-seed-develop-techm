define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('PxCharts', ['$scope', '$log', 'PredixAssetService', 'PredixViewService', '$http', function ($scope, $log, PredixAssetService, PredixViewService, $http) {
    	
    	//module

    	document.querySelector('#my-series').seriesObj = {
            myData: [
                [1397102460000, 11.4403],
                [1397139660000, 13.1913],
                [1397177400000, 12.8485],
                [1397228040000, 10.975]],
                
            myName: 'foo'
        };
    	document.querySelector('#my-series-bar').seriesObj = {
    		myData: [
    		         [1397102460000, 11.4403],
    		         [1397139660000, 13.1913],
    		         [1397177400000, 12.8485],
    		         [1397228040000, 10.975]],
    		         
    		         myName: 'foo'
    	};
    	document.querySelector('#my-series-scatter').seriesObj = {
    		myData: [
    		         [1397102460000, 11.4403],
    		         [1397139660000, 13.1913],
    		         [1397177400000, 12.8485],
    		         [1397228040000, 10.975]],
    		         
    		         myName: 'foo'
    	};
    	document.querySelector('#my-series-histogram').seriesObj = {
    		myData: [
    		         [1397102460000, 11.4403],
    		         [1397139660000, 13.1913],
    		         [1397177400000, 12.8485],
    		         [1397228040000, 10.975]],
    		         
    		         myName: 'foo'
    	};
    	document.querySelector('#my-series-histogram').seriesObj = {
    		myData: [
    		         [1397102460000, 11.4403],
    		         [1397139660000, 13.1913],
    		         [1397177400000, 12.8485],
    		         [1397228040000, 10.975]],
    		         
    		         myName: 'foo'
    	};
    	  
    	  
    	
    }]);
});



