var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });


mongoose.connect('mongodb://yusifibrahimov:6701995y@ds037244.mongolab.com:37244/student_db');

var Schema = mongoose.Schema;

var personSchema = new Schema ({
	firstname: String,
	lastname: String,
	address: String,
	email: String
});

var Person = mongoose.model('Person', personSchema);


app.post('/person', urlencodedParser, function(req, res){
	res.redirect('/students');

	var student = Person({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		address: req.body.address,
		email: req.body.email
	});

	console.log(student);

	student.save(function (err){
		if(err) throw err;
		console.log('student saved');
	});
});

app.get("/students", function(req, res){
	Person.find({}, function(err, students){
        res.send(students);

	/*		res.render('students', {
				title: "List of registered students",
				firstname: students[1].firstname			
			});
	*/
		
	});
});

app.get('/person/:id', function(req, res){
	Person.findOne({_id: req.params.id}, function(err, callThis){
		res.render('show', {
//			res.send(character);

			firstname: callThis.firstname,
			lastname: callThis.lastname,
			address: callThis.address,
			email: callThis.email
		});
	});
});
 
app.get('/remove/:id', function(req, res) {
	Person.findOneAndRemove({_id: req.params.id}, function(err, doc) {
	if (err) {
		res.send("There was a problem removing the information from the database.")
	} else {
		console.log("Student with id number " + req.params.id + " has been deleted");
		res.redirect("/students");
		}
	});
});

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use('/', function(req, res, next){
	console.log('Request Url:' + req.url);

	Person.find({}, function(err, users){
		if(err) throw err;
		//console.log(users);
	});
  next();
});

htmlController(app);
apiController(app); 

app.listen(port); 