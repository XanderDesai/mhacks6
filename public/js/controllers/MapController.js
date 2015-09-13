app.controller('MapController', ['$scope', '$http', 'PatientService', function($scope,$http, PatientService)
	{

		$scope.sendSMS = function() {
			var results = PatientService.get();
			console.log(results);
		}
	}]);