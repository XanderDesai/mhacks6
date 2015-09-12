angular.module('MainController', []).controller('MainController', function($scope, $http, Patients) {
	$scope.formData = {
		firstName : "dog",
		lastName : "cat"
	}

	// get all
	// Patients.get().success(function(data) {
		
	// })

	// get one 

	// create
	// $scope.createPatient = function() {
	// 	console.log('wtffffff');
	// 	if ($scope.formData.firstName != undefined && 
	// 		$scope.formData.lastName != undefined) {
	// 		// validate the formData to make sure that something is there
 //            // if form is empty, nothing will happen
	// 		Patients.create($scope.formData)
	// 			// if successful creation, call our get function to get all the new todos
 //                .success(function(data) {
 //                    $scope.formData = {}; // clear the form so our user is ready to enter another
 //                    // $scope.patients = data; // assign our new list of patients
 //                });
	// 	}
	// }

	// // delete 
	// $scope.deletPatient = function() {

	// }
});
// angular.module('MainController', []).controller('MainController', function($scope) {

// 	$scope.tagline = 'YOLO for life';	

// });