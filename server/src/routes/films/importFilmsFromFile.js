const fs = require('fs');
const formidable = require('formidable');
const sendRegularError = require('../../globals/sendRegularError');

const importFilmsFromFile = (req, res) => {
  const transpileTextFile = (file) => {
    const data = fs.readFileSync(file, 'utf8', function (err, data) {
      if (err) {
        sendRegularError(err, 'Inputted file', res);
      }
      return data;
    });

    let films = [];
    const chuncksArr = data.toString().split('\r\n\r\n');
    chuncksArr.forEach((chunck) => {
      if (chunck.length < 1) {
        return;
      }
      const filmObj = {};
      const chunckData = chunck.split('\r\n');
      chunckData.forEach((el) => {
        const keyValuePair = el.split(':');
        const formattedKey = keyValuePair[0].toLowerCase().split(' ').join('_');
        filmObj[formattedKey] = keyValuePair[1];
      });
      films.push(filmObj);
    });
    return films;
  };

  new formidable.IncomingForm().parse(req, (err, fields, files) => {
    const films = transpileTextFile(files.file.path);

    res.status(200);
    res.json({
      text: 'Test route is successfull',
      data: films,
    });
  });
};

module.exports = importFilmsFromFile;
