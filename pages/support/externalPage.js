window.onload = function(e) {
  if (isIframe()) {
    // Send message to parent
    let sessionId = getParameterByName('sessionId');
    if (!sessionId) {
      console.error("URL[" + window.location.href + "] does not contain session id");
    }
    else {
      let key = sessionId + "-childFrameHeight";
      let height = $(document).height();
      let message = {
        "key" : key,
        "value" : height
      }

      console.log("Page for session [" + key + "] has height: " + height + " px");
      parent.postMessage(JSON.stringify(message), "*");
    }
  }
  else {
    // Redirect to the proper page
    let target = location.origin + '?goto=' + 
      location.pathname.replace('/pages/', '/page/') + 
      location.search.replace('?', '&');
    location.href = target;
  }
}

/**
 * Parses current url and retrieve the given parameter
 * query string: ?foo=lorem&bar=&baz
 * var foo = getParameterByName('foo'); // "lorem"
 * var bar = getParameterByName('bar'); // "" (present with empty value)
 * var baz = getParameterByName('baz'); // "" (present with no value)
 * var qux = getParameterByName('qux'); // null (absent)
 * @param {*} name 
 * @param {*} url 
 */
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

/**
 * Detects whether the page is running inside an iFrame or not
 */
function isIframe() {
  try {
    return window.self !== window.top;
  }
  catch (e) {
    return true;
  }
}
