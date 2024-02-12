const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// API endpoint to handle form submission
app.post('/submit-form', (req, res) => {
  const userData = req.body;

  // Log the received data (you can perform other operations here)
  console.log('Received data:', userData);

  // Respond with a success message
  res.status(200).json({ message: 'Form submitted successfully!' });
});

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${3000}`);
});
