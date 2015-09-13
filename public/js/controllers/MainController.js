app.controller('MainController', ['$scope', '$http', 'PatientService', function($scope, $http, PatientService) {
	$scope.formData = {}
	// $scope.patients = {[]}

	// get all
	PatientService.get().success(function(data) {
		$scope.patients = data
	})

	// get one 

	// create
	$scope.createPatient = function() {
		if ($scope.formData.firstName != undefined && 
			$scope.formData.lastName != undefined) {
			// validate the formData to make sure that something is there
            // if form is empty, nothing will happen
			PatientService.create($scope.formData)
				// if successful creation, call our get function to get all the new todos
                .success(function(data) {
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    // $scope.patients = data; // assign our new list of patients
                });
		}
	}

	// // delete 
	// $scope.deletPatient = function() {

	// }
}]);