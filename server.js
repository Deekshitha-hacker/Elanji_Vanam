// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

// Routes
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const tutorialRoutes = require('./routes/tutorial');

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/tutorials', tutorialRoutes);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(Server running on port ${port});
});
