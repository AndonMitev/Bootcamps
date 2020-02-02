const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 5000;

const BOOTCAMP_URL = '/api/v1/bootcamps';

app.get(BOOTCAMP_URL, (req, res) => {
  res.status(200).json({
    success: true,
    data: 'All bootcamps'
  });
});

app.post(BOOTCAMP_URL, (req, res) => {
  res.status(201).json({
    success: true,
    data: 'New bootcamp has been added'
  });
});

app.put(BOOTCAMP_URL + '/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, data: `Bootcamp ${req.params.id} has been edited` });
});

app.delete(BOOTCAMP_URL + '/:id', (req, res) => {
  res.status(200).json({
    success: true,
    data: `Bootcamp ${req.params.id} has been deleted`
  });
});

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
