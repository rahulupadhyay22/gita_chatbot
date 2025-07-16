// A simple Express server to handle environment variables and serve the app.
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Create an endpoint to securely provide the API key to the frontend
app.get('/api/key', (req, res) => {
  res.json({ apiKey: process.env.GEMINI_API_KEY });
});

// Serve the static files from the current directory
app.use(express.static(path.join(__dirname)));

// Serve index.html for any other request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
