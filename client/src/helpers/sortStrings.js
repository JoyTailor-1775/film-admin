export default (arr, param) => {
  return arr.sort(function (a, b) {
    const nameA = a[param].toUpperCase();
    const nameB = b[param].toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};
