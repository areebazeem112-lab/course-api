const express = require('express');
const { notFound } = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/courses', require('./routes/courseRoutes'));

app.use(notFound); // last: catches unknown URLs

module.exports = app;