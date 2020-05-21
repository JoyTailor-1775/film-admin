const fs = require('fs');
const formidable = require('formidable');
const sendDbError = require('../../globals/sendDbError');
const sendRegularError = require('../../globals/sendRegularError');
const Film = require('../../modules/db/schemas/filmSchema');

const importFilmsFromFile = (req, res) => {
  const transpileTextFile = (file) => {
    const data = fs.readFileSync(file, 'utf8', function (err, data) {
      if (err) {
        sendRegularError(err, 'Inputted file', res);
      }
      return data;
    });
    /*
     Here we are transpiling incoming text file into semantic js-objects. 
     Firstly, we split the doc by double new-line chars \r\n , getting arrays
     of separate entities. Then we split them again by one new-line char
     and finally by the : sign, getting an array, where the first elem is 
     a key name and the second one is the value. Also here 'stars' field name
     is renamed for 'cast'.
    */
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
        console.log({ formattedKey });
        if (formattedKey === 'stars') {
          filmObj['cast'] = keyValuePair[1].split(',').map((el) => el.trim());
        } else {
          filmObj[formattedKey] = keyValuePair[1];
        }
      });
      films.push(filmObj);
    });
    return films;
  };

  const sendResponse = (films) => {
    res.status(200);
    res.json({
      status: 'The films were successfully imported and uploaded to the db',
      data: films,
    });
  };

  new formidable.IncomingForm().parse(req, (err, fields, files) => {
    const films = transpileTextFile(files.file.path);
    Film.collection
      .insertMany(films)
      .then(sendResponse)
      .catch((err) => sendDbError(err, res));
  });
};

module.exports = importFilmsFromFile;
