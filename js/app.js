var app = angular.module('beyonceApp', []);

app.controller('MainController', function($scope, $http) { 
	$scope.title = 'Rate the Beyonce Gif'; 
	$scope.about = "It's as simple as it sounds! Rate a Beyonce gif. If you want another gif, click the 'another!' button";
	
	console.log("hello");
	fetch();

	function fetch() { 
		var beyonceJSON = "http://api.giphy.com/v1/gifs/search?q=beyonce&api_key=dc6zaTOxFJmzC"; 
		$http.get(beyonceJSON)
			.success(function(response) {
				data = response.data;
				dataLength = data.length; // Get the number of gifs 
				n = Math.floor(Math.random() * dataLength); // Get a random number between 0 and the number of objects in data array 
	
				$scope.data = data[n]

			});
	}
	// $scope.method = 'GET';
	// $scope.giphy = function() { 
	// 	$scope.code = null;
	// 	$scope.response = null;

	// 	$http({method: $scope.method}).
	// 		then(function(response) { 
	// 			$scope.status = response.status;
	// 			$scope.data = response.data;
	// 		}, function(response) { 
	// 			$scope.data = response.data || "Request failed";
	// 			$scope.status = response.status;
	// 		});
	// };
});
