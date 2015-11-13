var app = angular.module('beyonceApp', []);

app.controller('MainController', function($scope, $http) { 
	$scope.title = 'Heart the Beyonce Gif'; 
	$scope.about = "It's as simple as it sounds! Heart a Beyonce gif. If you want another gif, refresh the page!";

	$scope.bae = function() { 
		var marginTop = -randomNumber(screen.height/2);
		var marginLeft = randomNumber(screen.width/2);
	
		var image = document.createElement("img");
		image.src = 'assets/heart.svg';

		image.style.position = "absolute";
		image.style.marginTop = marginTop.toString() + "px";
		image.style.marginLeft = marginLeft.toString() + "px";
		image.style.width = "100px";
		image.style.height = "auto";
		image.style.zIndex = "-10000";
		document.getElementById("bae").appendChild(image);

	}

	function randomNumber(n) { return Math.floor(Math.random() * n); } // Random num generator with n as the upperbound inclusive

	function jsonFile() { return "http://api.giphy.com/v1/gifs/search?q=beyonce&api_key=dc6zaTOxFJmzC"  }

	fetch();
	function fetch() { 
		var beyonceJSON = jsonFile();
		
		$http.get(beyonceJSON)
			.success(function(response) {
				data = response.data;
				dataLength = data.length; // Get the number of gifs 
				n = randomNumber(dataLength);// Math.floor(Math.random() * dataLength); 
	
				$scope.data = data[n]

			});
	}
});
