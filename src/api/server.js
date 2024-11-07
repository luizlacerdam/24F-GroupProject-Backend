import app from './app.js';
import connection from '../database/mongoose.js';
// eslint-disable-next-line import/extensions
import router from '../routes/tickets.js';

const port = process.env.API_PORT || 3000;

connection();

// Use the router for /api/tickets endpoints
app.use('/api/tickets', router);

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});