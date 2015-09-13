angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
		
		.when('/twilio', {
			templateUrl: 'views/twilio.html',
			controller: 'TwilioController'
		})

	$locationProvider.html5Mode(true);

}]);