/**
 * @fileoverview Initializes and configures the Express application.
 * 
 * This file sets up the Express framework for handling HTTP requests and responses.
 * It includes middleware, routes, and other configurations necessary for the backend server.
 * 
 * @requires express
 */
import express from 'express';

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello world');
});

export default app;