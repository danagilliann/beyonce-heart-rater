var app = angular.module('beyonceApp', []);

app.controller('MainController', function($scope, $http) { 
	$scope.title = 'Heart the Beyonce Gif'; 
	$scope.about = "It's as simple as it sounds! Heart a Beyonce gif. If you want another gif, refresh the page! Warning: May be NSFW";

	$scope.bae = function() { 
		var marginTop = randomNumber(screen.height-114);
		var marginLeft = randomNumber(screen.width);
		
		var image = document.createElement("img");
		
		var emojis = ['heart.svg','heart_eyes.svg','sparkling_heart.svg']; 
		
		image.src = 'assets/' + emojis[randomNumber(3)];

		image.style.position = "absolute";
		image.style.top = marginTop.toString() + "px";
		image.style.left = marginLeft.toString() + "px";
		image.style.width = "100px";
		image.style.height = "auto";
		image.style.zIndex = "-10000";
		document.getElementById("bae").appendChild(image);

	}

	function randomNumber(n) { return Math.floor(Math.random() * n); } // Random num generator with n as the upperbound inclusive

	function jsonFile() { return "http://api.giphy.com/v1/gifs/search?q=beyonce&limit=100&offset=" + randomNumber(30).toString() + "&api_key=dc6zaTOxFJmzC"  }

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
