// Create web server and listen on port 3000
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use body-parser to parse JSON data sent to the server
app.use(bodyParser.json());

// Array to store comments
let comments = [];

// Route to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Route to add a comment
app.post('/comments', (req, res) => {
    // Get the comment data from the request
    let comment = req.body;
    // Add the comment to the array
    comments.push(comment);
    // Send a response with the new comment
    res.json(comment);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});