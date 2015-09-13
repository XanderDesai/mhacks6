app.controller('MapController', ['$scope', '$http', 'PatientService', function($scope,$http, PatientService)
	{

		$scope.sendSMS {
			var results = PatientService.get();
			console.log(results);
		}
	});