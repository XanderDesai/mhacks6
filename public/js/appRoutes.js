angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
		
		.when('/patientmap', {
			templateUrl: 'views/map.html',
			controller: 'MapController'
		})

	$locationProvider.html5Mode(true);

}]);