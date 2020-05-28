const sendError = (error, res, status) => {
  res.status(400),
    res.json({
      status: status ? status : 'Database error',
      error: error.stack,
    });
};

module.exports = sendError;
