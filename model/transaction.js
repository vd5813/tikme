// Import dependencies
const mongoose = require('mongoose')

//Defining the Schema
let transSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const Transaction = mongoose.model('Transaction', transSchema)

//Exporting the Schema
module.exports = Transaction