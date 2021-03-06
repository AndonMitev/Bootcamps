const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
require('colors');

// Load envs
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');

const app = express();

// Body parser
app.use(express.json());

const PORT = process.env.PORT || 5000;

const BOOTCAMP_URL = '/api/v1/bootcamps';
const COURSES_URL = '/api/v1/courses';

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(BOOTCAMP_URL, bootcamps);
app.use(COURSES_URL, courses);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold
  )
);
