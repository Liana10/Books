var booksArray = [
{
	"id": 1,
	"name": 'Peter Pan',
	"author": 'J.M. Barrie',
	"year": 1911,
	"rating": 8
},
{
	"id": 2,
	"name": 'One Crazy Summer',
	"author": 'Rita Williams-Garcia',
	"year": 2010,
	"rating": 9
},
{
	"id": 3,
	"name": 'Charlie and the Chocolate Factory',
	"author": 'Roald Dahl',
	"year": 1964,
	"rating": 6
},
{
	"id": 4,
	"name": 'The Lion and the Mouse',
	"author": 'Jerry Pinkney',
	"year": 2009,
	"rating": 7
},
{
	"id": 5,
	"name": 'Winnie the Pooh',
	"author": 'A.A. Milne',
	"year": 1926,
	"rating": 9
}];


// this function return the number of books in the array above
exports.book_number = function() {
	var numberOfBooks = 0;
	for (var i = 0; i < booksArray.length; i++)
	{
	    if (booksArray[i].name != null)
	    {
	        numberOfBooks++;
	    }
	}
	return numberOfBooks;
};


// this function find the first book in the year the user chose
// if there is no book in this year, it will return 0
exports.book_year = function(year) {
	for (var i = 0; i < booksArray.length; i++)
	{
	    if (booksArray[i].year == year)
	    {
	        return booksArray[i].name;
	    }
	}
	return 0;
};


// this function return an array of books that have rating equal or more than the user chose
exports.book_rating = function(rating) {
	var ratingArray = [];
	var ratingInedx = 0;

	for (var i = 0; i < booksArray.length; i++)
	{
		if (booksArray[i].rating >= rating)
		{
			ratingArray[ratingInedx] = booksArray[i];	
			ratingInedx++;
		}
	}
	return ratingArray;
};

