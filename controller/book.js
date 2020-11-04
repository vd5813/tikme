// Import dependencies
const express = require('express')
const api = express.Router()
const Book = require('../model/book')

//Rendering all books
api.get('/', (req, res) => {
    //Quering DB to get list of books
    Book.find({}, (err, books) => {
        if (err) console.error(err)
        //Rendering index[Home] page
        res.render('index', { books: books })
    })
})

//adding a book to DB
api.post('/addBook', (req, res) => {
    //reading from req body
    console.log(req.body, "Add book req body")
    const { name, status } = req.body
    //populating schema
    const book = new Book({ name, status })
    //saving to DB
    book.save(err => {
        if (err) res.send(err)
        console.log(`${book.name} added successfully`);
        // res.redirect('/');
    })
});

//Updating the Book Status [Available or Issued]
//Takes an id as req params
api.put('/:id', (req, res) => {
    Book.findById(req.params.id, (err, book) => {
        console.log(book)

        //Reading values from form
        book.name = req.body.name
        book.status = req.body.status
        //Saving to DB
        book.save(err => {
            if (err) res.send(err)
            console.log(`${book.name} updated successfully`);
            // res.redirect('/');
        })
    })

});

module.exports = api