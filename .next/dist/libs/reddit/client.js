'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('isomorphic-fetch');

var REDDIT_API_BASE = 'https://api.reddit.com';

exports.default = function (_ref) {
  var endpoint = _ref.endpoint,
      _ref$method = _ref.method,
      method = _ref$method === undefined ? 'GET' : _ref$method,
      _ref$token = _ref.token,
      token = _ref$token === undefined ? null : _ref$token;

  var conf = { method: method };
  return fetch(REDDIT_API_BASE + '/' + endpoint, conf).then(function (res) {
    if (res.status >= 400) throw new Error('Bad response from the API');
    return res.json();
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvcmVkZGl0L2NsaWVudC5qcyJdLCJuYW1lcyI6WyJSRURESVRfQVBJX0JBU0UiLCJlbmRwb2ludCIsIm1ldGhvZCIsInRva2VuIiwiY29uZiIsImZldGNoIiwidGhlbiIsInJlcyIsInN0YXR1cyIsIkVycm9yIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsSUFBTSxrQkFBTixBQUF3QixBQUN4Qjs7a0JBQWUsZ0JBQWdEO01BQTdDLEFBQTZDLGdCQUE3QyxBQUE2Qzt5QkFBbkMsQUFBbUM7TUFBbkMsQUFBbUMscUNBQTFCLEFBQTBCLFFBQUE7d0JBQW5CLEFBQW1CO01BQW5CLEFBQW1CLG1DQUFYLEFBQVcsT0FDN0Q7O01BQU0sT0FBTyxFQUFFLFFBQWYsQUFBYSxBQUNiO2VBQU8sQUFBUyx3QkFBVCxBQUE0QixVQUE1QixBQUF3QyxNQUF4QyxBQUE4QyxLQUFLLGVBQU8sQUFDL0Q7UUFBSSxJQUFBLEFBQUksVUFBUixBQUFrQixLQUFLLE1BQU0sSUFBQSxBQUFJLE1BQVYsQUFBTSxBQUFVLEFBQ3ZDO1dBQU8sSUFBUCxBQUFPLEFBQUksQUFDWjtBQUhELEFBQU8sQUFJUixHQUpRO0FBRlQiLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2Zsb3JpYW4vRGV2L09TUy9yZWFkaW5naXQifQ==