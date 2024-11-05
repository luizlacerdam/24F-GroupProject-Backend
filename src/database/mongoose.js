const mongoose = require('mongoose');
const ATLASDB = require('../config/config.js');

module.exports = function () {
    mongoose.connect(ATLASDB.ATLASDB);

    const mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', () => {
        console.log("Connected to MongoDB.");
    })
}