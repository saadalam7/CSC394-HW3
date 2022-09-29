var express = require('express');
var router = express.Router(); 

var pool = require('../db/database');

/* GET home page. */
pool.query('SELECT VERSION();', (err, res) =>{
	pool.end();
	jsonObj = res.rows;
	console.log(jsonObj);
})

router.get('/', function(req, res, next) {
	
	res.render('index', { title: "Saad Khan's HW3", version: jsonObj[0].version });
});

module.exports = router;
