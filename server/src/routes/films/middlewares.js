const addFilm = (req, res, next) => {
  console.log(req.body, 'req.body');
  if (
    req.body.title &&
    req.body.release_year &&
    req.body.format &&
    req.body.cast.length > 0
  ) {
    next();
    return;
  }
  res.status(400);
  res.json({
    error: `Films's fields inputs are invalid`,
  });
};

module.exports = {
  addFilm,
};
