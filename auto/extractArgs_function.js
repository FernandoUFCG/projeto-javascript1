'use strict';
function extractArgs_function(fn) {
  var fnText = stringifyFn(fn).replace(STRIP_COMMENTS, ''),
    args = fnText.match(ARROW_ARG) || fnText.match(FN_ARGS);
  return args;
}
