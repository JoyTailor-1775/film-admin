export default (fileName) => {
  const lastSlash = fileName.lastIndexOf('\\');
  return fileName.slice(lastSlash + 1);
};
