// restful API
var patientModel = require('./models/patient.js')

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	/*app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});*/

	//GET
	//Return all the patients in the db
	app.get('/api/patients', function(req, res){
		patientModel.find(function(err, patients){
			if(!err){
				res.json(patients);
			} else {
				res.send(err);
			}
		});
	});

	//GET
	//Return patient by id
	app.get('/api/patients/:id', function(req, res){
		return patientModel.findById(req.params.id, function(err, patient){
			if(!err){
				res.json(patient);
			} else {
				res.send(err);
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
				res.json({message : "Created patient"});
				//return console.log("Created patient" + patient.lastName);
			} else {
				res.send(err);
				//return console.log(err);
			}
		});

		//return res.send(patient);
	});

	//DELETE
	//Remove a single patient by ID
	app.delete('/api/patients/:id', function(req, res){
		patientModel.remove({
			_id: req.params.id
		}, function(err, patient){
			if(err){
				return res.send(err);
			}
			res.json({message : "Patient has been removed"});
		});
	});

	//PUT
	//Update a single patient by ID
	app.put('/api/patients/:id', function(req, res){
		patientModel.findOne({ _id: req.params.id }, function(err, patient){
			
			if(err)
				res.send(err);

			patient.lastName = req.body.lastName;
			patient.firstName = req.body.firstName;

			patient.save(function(err){
				if(err)
					res.send(err);

				res.json({message: patient.lastName + " updated"});
			});
		});
	});
};