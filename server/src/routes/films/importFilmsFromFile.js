const fs = require('fs');
const formidable = require('formidable');
const sendDbError = require('../../globals/sendDbError');
const sendRegularError = require('../../globals/sendRegularError');
const Film = require('../../modules/db/schemas/filmSchema');

const importFilmsFromFile = (req, res) => {
  const transpileTextFile = (data) => {
    /*
     Here we are transpiling incoming text file into semantic js-objects. 
     Firstly, we split the doc by double new-line chars \r\n , getting arrays
     of separate entities. Then we split them again by one new-line char
     and finally by the : sign, getting an array, where the first elem is 
     a key name and the second one is the value. Also here 'stars' field name
     is renamed for 'cast'.
    */
    let films = [];
    const lineBreakRegexp = /\r\n|\n/g;
    const lineBreakTwiceRegexp = /\r\n\r\n|\n\n/g;

    const splittedDoc = data.toString().split(lineBreakTwiceRegexp);
    const chuncksArr = splittedDoc.filter((el) => el.length > 2);
    chuncksArr.forEach((chunck) => {
      if (chunck.length < 1) {
        return;
      }
      const filmObj = {};
      const chunckData = chunck.split(lineBreakRegexp);
      chunckData.forEach((el) => {
        const keyValuePair = el.split(':');
        const formattedKey = keyValuePair[0].toLowerCase().split(' ').join('_');
        if (formattedKey === 'stars') {
          filmObj['cast'] = keyValuePair[1].split(',').map((el) => el.trim());
        } else {
          filmObj[formattedKey] = keyValuePair[1].trim();
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
    // Tries to read the file and send regular Error in response, if there is a
    // problem with the file.
    try {
      const data = fs.readFileSync(files.file.path, 'utf8', function (
        err,
        data
      ) {
        if (err) {
          throw new Error({ err: err, message: 'The file is broken' });
        }
        return data;
      });

      // Checks if the file is empty and sends corresponding error.
      if (data.toString().length < 1) {
        sendRegularError(
          { stack: 'The file is empty' },
          'The file is empty',
          res
        );
        return;
      }

      // Transpiles text data and send transpiled and normalized data
      // to the database.
      const films = transpileTextFile(data);
      const filmPromises = films.map((film) => {
        const newFilm = Film(film);
        return new Promise((resolve, reject) => {
          newFilm.save((error, result) => {
            if (error) {
              reject(error);
            }
            resolve(result);
          });
        });
      });

      Promise.all(filmPromises).then(
        (results) => {
          sendResponse(results);
        },
        (error) => {
          sendDbError(error, res);
        }
      );
    } catch (error) {
      sendRegularError(error, error.message, res);
    }
  });
};

module.exports = importFilmsFromFile;
