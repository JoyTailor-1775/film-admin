const sendDbReponse = (data, res) => {
  const msg = data
    ? 'The request has been submitted successfully'
    : 'There is no such an entity in the database';
  res.status(200);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-Type, Accept, Origin, Authorization'
  );
  res.json({
    status: msg,
    data: data,
  });
};

module.exports = sendDbReponse;
