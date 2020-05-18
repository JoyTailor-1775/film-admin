const cloneObject = require('./cloneObject');

const renameObjKey = (object, key, newKey) => {
  const clonedObj = cloneObject(object);
  const targetKey = clonedObj[key];
  delete clonedObj[key];
  clonedObj[newKey] = targetKey;
  return clonedObj;
};

module.exports = renameObjKey;
