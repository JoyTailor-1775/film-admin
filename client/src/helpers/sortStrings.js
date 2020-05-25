export default (arr, param) => {
  return arr.sort(function (a, b) {
    const nameA = a[param].toLowerCase().trim();
    const nameB = b[param].toLowerCase().trim();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};
