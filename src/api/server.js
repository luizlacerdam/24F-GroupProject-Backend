const app = require('./app');
const connection = require('../database/mongoose')
const port = process.env.API_PORT || 3000;


connection();

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});