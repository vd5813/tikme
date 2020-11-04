// Import dependencies
const mongoose = require('mongoose')

//Defining the Schema
let bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String
    }
})

const Book = mongoose.model('Book', bookSchema)

//Exporting the Schema
module.exports = Book