// Import the Express module
const express = require('express');

// Create an instance of an Express app
const app = express();

// Define the port
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a simple route
app.get('/', (req, res) => {
    res.send('Welcome to My Simple Web App!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});