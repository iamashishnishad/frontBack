const express = require('express');
const cors = require('cors');

const app = express();
const port = 5001;

let data = [];

app.use(cors());
app.use(express.json());

// Endpoint to submit data
app.post('/submit', (req, res) => {
    const { name } = req.body;
    if (name) {
        data.push(name);
        res.json({ message: "Name saved!", data });
    } else {
        res.status(400).json({ message: "Name is required!" });
    }
});

// Endpoint to get all data
app.get('/names', (req, res) => {
    res.json({ data });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
