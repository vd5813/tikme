// importing Dependencies
const express = require('express')
const db = require('./db')

//Initializing express
const app = express()

const port = process.env.PORT || 3000

//Initializing DB
db()

//Parsing Json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Set Views and view engine
app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/css', express.static(__dirname + 'public/css'))

//Setting route
app.use('/', require('./controller/book'));
app.use('/transaction', require('./controller/transaction'));

// //Displaying home page
// app.get('/', (req, res) => {
//     res.render('index')
// });

//Listening to port
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});