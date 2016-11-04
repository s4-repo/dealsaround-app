angular.module('deals.controllers', [])

    .controller('DealsLoginCtrl', function ($scope) {})

    .controller('DealsHomeCtrl', function ($scope) {})

    .controller('AllDealsCtrl', function ($scope, $http) {
    	$http.get("https://sheetsu.com/apis/v1.0/f30264ebda07").success(function(response){
			$scope.deals = response;
		});
    });
