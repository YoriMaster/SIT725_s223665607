const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());

// GET /add?a=1&b=1
app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.send('Usage: /add?a=number&b=number');
    }

    const sum = a + b;
    res.json({ a, b, sum });
});

// In-memory array to store quotes
let quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do not wait to strike till the iron is hot; but make it hot by striking."
];

// GET endpoint to retrieve a random quote
// Example: http://localhost:3000/api/quote
app.get('/api/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[randomIndex] });
});

// POST endpoint to add a quote
app.post('/api/quote', (req, res) => {
    const newQuote = req.body.quote;

    if (!newQuote) {
        return res.status(400).json({ error: "Quote is required" });
    }

    quotes.push(newQuote);
    res.json({ message: "Quote added", quote: newQuote });
});


// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});