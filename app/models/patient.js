// grab the mongoose module
var mongoose = require('mongoose');

// define schema

var Schema = mongoose.Schema

var PatientInfo = new Schema ({
	// basic info
	lastName : { type : String, required: true}, 
	firstName: { type : String, required: true}, 
});
// 	MI: String,
// 	gender: { 
// 		type : String, 
// 		enum: ['M', 'F'],
// 		required: true
// 	}, 
// 	birthDate: { type : Date, required: true}, 
// 	address: { type : String, required: true}, 
// 	race: { type : String, required: true}, 
// 	city: { type : String, required: true}, 
// 	state: { type : String, required: true}, 
// 	zip: { type : Integer, required: true}, 
// 	phoneNumber: { type : Integer, required: true}, 

// 	services: Services,
// 	problems: Problems,

// 	alcoholConsume: {
// 		type: String,
// 		enum: ['Never', 'I Quit', '1-2 times/yr', '1-2 times/month', '1-2 days/wk', '3-4 days/wk', '5+days'],
// 		required: true
// 	},

// 	smoke: {
// 		type: String,
// 		enum: ['Never', 'I Quit', 'Rarely', '1-2 times/month', '1-2 times/wk', '3-4 times/wk', '1-2 packs/day'],
// 		required: true
// 	},

// 	wt: Double,
// 	ht: Double,
// 	BMI: Double,
// 	waist: Double,

// 	modified: {type: Date, default: Date.now}
// });

// var Services = new Schema({
// 	internalMedicien: {type: Boolean, default: false},
// 	dental: {type: Boolean, default: false},
// 	pediatrics: {type: Boolean, default: false},
// 	urology: {type: Boolean, default: false},
// 	cardiology: {type: Boolean, default: false},
// 	gastroenterology: {type: Boolean, default: false},
// });

// var Problems = new Schema({
// 	highBloodPressure: {type: Boolean, default: false},
// 	heartProblem: {type: Boolean, default: false},
// 	chestPain: {type: Boolean, default: false},
// 	shortnessOfBreath: {type: Boolean, default: false},
// 	prolongedDizziness: {type: Boolean, default: false},
// 	diabetes: {type: Boolean, default: false},
// 	asthma: {type: Boolean, default: false},
// 	stroke: {type: Boolean, default: false},
// 	unexpectedChangeInWeight: {type: Boolean, default: false},
// 	severeHeadaches: {type: Boolean, default: false},
// 	tumorsOrCancer: {type: Boolean, default: false},
// 	bleedingDisorder: {type: Boolean, default: false},
// 	alcoholism: {type: Boolean, default: false},
// 	arthritis: {type: Boolean, default: false},
// 	glassesContacts: {type: Boolean, default: false},
// });


// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Patient', PatientInfo)

