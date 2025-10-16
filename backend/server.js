require('dotenv').config(); // Load .env file first
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');

// --- Pre-flight Check ---
if (!process.env.MONGO_URI) {
  console.error("FATAL ERROR: MONGO_URI is not defined in .env file.");
  process.exit(1);
}

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from the React frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json()); // Allows the server to accept JSON in the request body
app.use(express.urlencoded({ extended: false })); // Allows form data

// Routes
app.use('/api/items', itemRoutes);

// Simple base route
app.get('/', (req, res) => {
  res.send('Lost & Found API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));