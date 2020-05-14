export default sendError = (error, res) => {
  res.status(400),
    res.json({
      status: "Database error.",
      error: error.stack,
    });
};
