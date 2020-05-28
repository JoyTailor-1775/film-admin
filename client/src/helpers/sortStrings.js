export default (arr, param) => {
  return arr.sort(function (a, b) {
    const nameA = a[param].toUpperCase().trim();
    const nameB = b[param].toUpperCase().trim();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};
