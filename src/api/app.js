/**
 * @fileoverview Initializes and configures the Express application.
 * 
 * This file sets up the Express framework for handling HTTP requests and responses.
 * It includes middleware, routes, and other configurations necessary for the backend server.
 * 
 * @requires express
 */
const express = require('express');

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello world');
});

module.exports = app;