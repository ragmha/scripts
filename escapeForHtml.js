/**
 * Encode less-than and ampersand characters with entity codes to make user-
 * provided text safe to parse as HTML.
 * [escapeForHtml description]
 * @param  {string} s  String to escape
 * @return {string} String with unsage characters escaped with entity codes
 */
const escapeForHtml = s => s.replace(/[&<]/g, c => c === '&' ? '&amp' : '&lt;');

module.exports = escapeForHtml;
