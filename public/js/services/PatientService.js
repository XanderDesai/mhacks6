// angular.module('PatientService', []).factory('Patients', ['$http', function($http) {
		return {
			// // get all patients
   //          get : function() {
   //              return $http.get('/api/patients');
   //          },
   //          // create a patient
   //          create : function(patientData) {
   //              return $http.post('/api/patients', patientData);
   //          },
   //          // get one patient
   //          get : function(id) {
   //              return $http.get('/api/patients/' + id);
   //          },
   //          // update one patient
   //          put : function(id) {
   //          	return $http.put('/api/patients/' + id);
   //          },
   //          // delete a patient
   //          delete : function(id) {
   //              return $http.delete('/api/patients/' + id);
   //          }

        }
// 	}
// });

angular.module('PatientService', []).factory('Patients', ['$http', function($http) {
			return {
			// get all patients
            get : function() {
                return $http.get('/api/patients');
            },
            // create a patient
            create : function(patientData) {
                return $http.post('/api/patients', patientData);
            },
            // // get one patient
            // get : function(id) {
            //     return $http.get('/api/patients/' + id);
            // },
            // // update one patient
            // put : function(id) {
            // 	return $http.put('/api/patients/' + id);
            // },
            // delete a patient
            delete : function(id) {
                return $http.delete('/api/patients/' + id);
            }
        }
}]);