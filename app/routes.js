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

	//GET
	//Return all the patients in the db
	app.get('/api/patients', function(req, res){
		return patientModel.find(function(err, patients){
			if(!err){
				return res.send(patients);
			} else {
				return console.log(err);
			}
		});
	});

	//GET
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

	//POST
	//Create a single patient
	app.post('/api/patients/', function(req, res){
		var patient;
		console.log("Post:");
		console.log(req.body);
		patient = new patientModel({
			lastName: req.body.lastName,
			firstName: req.body.firstName
		});

		patient.save(function(err){
			if(!err){
				return console.log("Created patient" + patient.lastName);
			} else {
				return console.log(err);
			}
		});

		return res.send(patient);
	});

	//DELETE
	//Remove a single patient by ID
	app.delete('/api/patients/:id', function(req, res){
		return patientModel.findById(req.param.id, function(err, patient){
			return patient.remove(function(err){
				if(!err){
					console.log(patient.lastName + " has been removed");
					return res.send('');
				} else {
					console.log(err);
				}
			});
		});
	});

	//PUT
	//Update a single patient by ID
	app.put('/api/products/:id', function(req, res){
		return patientModel.findByID(req.params.id, function(err, patient){
			patient.lastName = req.body.lastName;
			patient.firstName = req.body.firstName;

			return patient.save(function(err){
				if(!err){
					console.log(patient.lastName + " updated");
				} else {
					console.log(err);
				}

				return res.send(patient);
			});
		});
	});
};