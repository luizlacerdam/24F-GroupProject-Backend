const app = require('./app');

const port = process.env.API_PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});