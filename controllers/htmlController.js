
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
  ///var jsonParser = bodyParser.json();

module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index');
	});

	app.get('/lelew/:id', function(req, res){
		res.render('person', { 
			ID: req.params.id, 
			Qstr: req.query.qstr });
	});
}


 /*   .get(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    });
*/

