// restful API
var patientModel = require('./models/patient.js')

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

	//Return all the patients in the db
	app.get('/api/patients', function(req, res){
		return patientModel.find(function(err,patients){
			if(!err){
				return res.send(patients);
			} else {
				return console.log(err);
			}
		});
	});

	//Return patient by id
	app.get('/api/patients/:id', function(req, res){
		return patientModel.findById(req.params.id, function(err, patient){
			if(!err){
				return res.send(patient);
			} else {
				return console.log(err);
			}
		});
	});
};