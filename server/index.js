const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const courseRoutes = require('./routes/courseRoutes');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const documentRoutes = require('./routes/documentRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// API routes
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/courses', courseRoutes);
app.use('/enrollments', enrollmentRoutes);
app.use('/documents', documentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://localhost:27017/skillflows';

// Connect to MongoDB
mongoose.connect(MONGO_URI)
.then(() => {
  console.log('Connected to MongoDB successfully');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
});
