angular.module('PatientService', []).factory('Patients', ['$http', function($http) {
		return {
            get : function() {
                return $http.get('/api/patients');
            },
            create : function(patientData) {
                return $http.post('/api/patients', patientData);
            },
            get : function(id) {
                return $http.get('/api/patients/' + id);
            },
            put : function(id) {
            	return $http.put('/api/patients/' + id);
            },
            delete : function(id) {
                return $http.delete('/api/patients/' + id);
            },

        }
	}
}]);