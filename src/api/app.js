/**
 * @fileoverview Initializes and configures the Express application.
 * 
 * This file sets up the Express framework for handling HTTP requests and responses.
 * It includes middleware, routes, and other configurations necessary for the backend server.
 * 
 * @requires express
 */
const express = require('express');
const userRouter = require('../routes/user');
const ticketRouter = require('../routes/ticket');
const { errorMiddleware } = require('../middlewares/errorMiddleware');

const app = express();
app.use(express.json());

app.use('/users', userRouter);
app.use('/tickets', ticketRouter);

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use(errorMiddleware);

module.exports = app;