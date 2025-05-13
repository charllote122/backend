const express = require('express');
const app = express();

const PORT = process.env.PORT || 10000;

// Define the GET route for the home page
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
