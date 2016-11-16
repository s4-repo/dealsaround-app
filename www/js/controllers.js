angular.module('deals.controllers', [])
	// var baseURL = "http://localhost:8000/",
	// 	userName = "";

    .controller('DealsLoginCtrl', function ($scope, $http, $location) {
    	$scope.baseURL = "http://localhost:8000/";
    	$scope.userName = "";
    	
    	$scope.checkUser = function(){
    		$http.get($scope.baseURL+'login').then(function(response){
    			$scope.userData = response.json();
    			$scope.userName = $scope.userData["username"];
    			$location.path("/userHome");
    		}, function(response){
    			console.log("Some Error occured in Api");
    			$location.path("/invalidLogin");
    		});
    	}

    	$scope.loginUser = function(){
    		$scope.checkUser();
    	}

    	// $scope.checkUser();
    })

    .controller('InvalidLoginCtrl', function ($scope) {})

    .controller('DealsHomeCtrl', function ($scope) {})

    .controller('AllDealsCtrl', function ($scope, $http) {
  //   	$http.get("https://sheetsu.com/apis/v1.0/f30264ebda07").success(function(response){
		// 	$scope.deals = response;
		// });

		http.get("https://sheetsu.com/apis/v1.0/f30264ebda07").then(function(response) {
	        $scope.deals = response;
	    }, function(response) {
	        //Second function handles error
	        console.log("Some Error occured in Api");
	    });
    });
