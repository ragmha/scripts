/**
 * addEventListener wrapper
 * @param  {Element|Window}   target   TargetElement
 * @param  {string}   type     Event name to bind to
 * @param  {Function} callback Event callback
 * @param  {boolean}   [capture]  Capture the event
 */
 
const $on = (target, type, callback, capture) =>
  target.addEventListener(type, callback, !!capture);
  
module.exports = $on
