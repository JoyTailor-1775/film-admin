const sendDbReponse = (data, res) => {
  const msg = data
    ? 'The request has been submitted successfully'
    : 'There is no such an entity in the database';
  const statusCode = data ? 200 : 401;
  res.status(statusCode);
  res.json({
    status: msg,
    data: data,
  });
};

module.exports = sendDbReponse;
