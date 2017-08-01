/**
 * querySelector wrapper
 * @param  {string} selector Selector to query
 * @param  {Element} [scope]    Optional scope element for the selector
 */
 
const qs = (selector, scope) => (scope || document).querySelector(selector);

module.exports = qs;
