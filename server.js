const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const bootcamps = require('./routes/bootcamps');

dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 5000;

const BOOTCAMP_URL = '/api/v1/bootcamps';

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(BOOTCAMP_URL, bootcamps);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
