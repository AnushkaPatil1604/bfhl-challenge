const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define other routes as needed
app.get('/api/some-endpoint', (req, res) => {
  res.json({ message: 'This is some endpoint' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});