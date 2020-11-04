var mongoose = require('mongoose');

module.exports = () => {
    //Set up default mongoose connection
    var mongoDB = 'mongodb://127.0.0.1/library';
    mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(`connected to ${mongoDB}`));
    //Get the default connection
    var db = mongoose.connection;
    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}