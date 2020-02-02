// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: 'All bootcamps'
  });
};

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `Bootcamp: ${req.params.id}`
  });
};

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private
exports.createBootcamp = (req, res, next) => {
  res.status(201).json({
    success: true,
    data: 'New bootcamp has been added'
  });
};

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, data: `Bootcamp ${req.params.id} has been edited` });
};

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `Bootcamp ${req.params.id} has been deleted`
  });
};
