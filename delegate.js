/**
 * Attach a handler to an event for all elements matching a selector
 * @param  {Element} target   Element which the event must bubble to
 * @param  {string} selector  Selector to match
 * @param  {string} type      Event name
 * @param  {Function} handler Function called when the event bubbles to target
 *                            from an element matching selector
 * @param  {[type]} capture  Capture the event
 */
 
const $delegate = (target, selector, type, handler, capture) => {
  const dispatchEvent = event => {
    const targetElement = event.target;
    const potentialElements = target.querySelectorAll(selector);
    let i = potentialElements.length;

    while (i--) {
      if (potentialElements[i] === targetElement) {
        handler.call(targetElement, event);
        break;
      }
    }
  };

  $on(target, type, dispatchEvent, !!capture);
};

module.exports = $delegate;
