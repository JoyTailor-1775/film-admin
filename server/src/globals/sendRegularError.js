const sendError = (error, msg, res) => {
  res.status(400),
    res.json({
      status: `${msg}`,
      error: error.stack,
    });
};

module.exports = sendError;
