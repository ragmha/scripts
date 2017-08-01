/**
 * Creates a hashtable from an array of objects
 *
 * @param {Array} array - The array to use
 * @param {string} [prop=id] prop - The property to use as key
 * @returns {Object}
 */
const arrayToHash = (array, prop = 'id') =>
  array.reduce((obj, item) => {
    obj[item[prop]] = item;
    return obj;
  }, {});
  
 module.exports = arrayToHash;
