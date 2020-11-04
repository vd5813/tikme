// Import dependencies
const express = require('express')
const api = express.Router()
const Transaction = require('../model/transaction')

//Gettins all transactions
api.get('/', (req, res) => {
    //Quering DB to get list of transactions
    Transaction.find({}, (err, transaction) => {
        if (err) console.error(err)
        res.render('transaction', { transaction: transaction })
    })
})

//adding a transaction to DB
api.post('/addtrans', (req, res) => {
    //reading from req body
    console.log(req.body, "Add trans req body")
    let { name, status } = req.body
    //populating schema
    status = status == "Available" ? "Issued" : "Available"
    const transaction = new Transaction({ name, status })
    //saving to DB
    transaction.save(err => {
        if (err) res.send(err)
        console.log(`Transaction for ${transaction.name} added successfully`);
        res.redirect('/');
    })
});

module.exports = api