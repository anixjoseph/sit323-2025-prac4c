const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Addition with error handling
app.get('/add', (req, res) => {
    const { a, b } = req.query;
    if (!a || !b || isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid input. Provide valid numbers for a and b." });
    }
    res.json({ result: Number(a) + Number(b) });
});

// Division with zero-check
app.get('/divide', (req, res) => {
    const { a, b } = req.query;
    if (!a || !b || isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid input. Provide valid numbers for a and b." });
    }
    if (Number(b) === 0) {
        return res.status(400).json({ error: "Division by zero is not allowed." });
    }
    res.json({ result: Number(a) / Number(b) });
});

// Square Root with negative check
app.get('/sqrt', (req, res) => {
    const { number } = req.query;
    if (!number || isNaN(number)) {
        return res.status(400).json({ error: "Invalid input. Provide a valid number." });
    }
    if (Number(number) < 0) {
        return res.status(400).json({ error: "Cannot calculate square root of a negative number." });
    }
    res.json({ result: Math.sqrt(Number(number)) });
});

// Start the server
app.listen(port, () => {
    console.log(`Calculator microservice running on http://localhost:${port}`);
});
