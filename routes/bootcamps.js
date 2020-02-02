const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: 'All bootcamps'
  });
});

router.post('/', (req, res) => {
  res.status(201).json({
    success: true,
    data: 'New bootcamp has been added'
  });
});

router.put('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, data: `Bootcamp ${req.params.id} has been edited` });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    data: `Bootcamp ${req.params.id} has been deleted`
  });
});

module.exports = router;
