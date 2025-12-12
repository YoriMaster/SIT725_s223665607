const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('./public'));

// Import route file
const bookRoute = require('./routes/book');

// Mount the route at /api/hello
app.use('/api/book', bookRoute);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});