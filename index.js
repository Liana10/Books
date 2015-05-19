var express = require('express');	
var app = express();
var url = require('url');
var books = require('./books_ws'); // reference to the books array and functions

// http://localhost:8080
app.get('/', function (req, res) {
	res.status(200).json({status:true, message:"Welcome to the children's books app"});
});


// http://localhost:8080/booksNumber
app.get('/booksNumber', function (req, res) {
	var numberOfBooks = books.book_number();
	res.set('Function book_number', 'ok');
	res.json({"number Of Books":numberOfBooks});
});


// http://localhost:8080/bookByYear?year=2010
app.get('/bookByYear', function (req, res) {
	var urlPart = url.parse(req.url , true);
	var query = urlPart.query;
	var bookAtYear = books.book_year(query.year);
	res.set('Function book_year', 'ok');
	res.json({name:bookAtYear, year:query.year});
	// if there is no book in this year, name will be 0
});


// http://localhost:8080/booksByRating/8
app.get('/booksByRating/:rating', function (req, res) {
	var bookRatingOver = [];	
	bookOverRating = books.book_rating(req.params.rating);
	res.set('Function book_rating', 'ok');
	res.json(bookOverRating);
});


// http://localhost:8080/error
app.get('/error', function (req, res) {
	res.status(500).json({status:false, message:"Internal Server Error"});
});


app.listen(process.env.PORT || 3000);
console.log('Node app is running on port', process.env.PORT);

//app.listen(8080);
//console.log('listening on port 8080');