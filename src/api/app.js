import express from 'express';

/**
 * Initializes the Express application.
 * 
 * @constant {Object} app - The Express application instance.
 */
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello world');
});

export default app;