// backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import your routes
const authRoutes = require('./routes/auth');
// You can add more routes here later, like:
// const productRoutes = require('./routes/products');

const app = express();

// Middleware
app.use(cors({
  // Add both your deployed and local frontend URLs to the guest list
  origin: [
    'http://localhost:5173',
    'http://localhost:5174'  
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
})); // Allows your frontend to make requests
app.use(express.json()); // Parses incoming JSON bodies

// --- API Routes ---
// Tell Express to use your auth routes for any request
// that starts with "/api/auth"
app.use('/api/auth', authRoutes);

// Later, you could add:
// app.use('/api/products', productRoutes);

// Start the server
const PORT = process.env.PORT || 5001; 
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});