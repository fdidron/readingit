'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require('styled-components');

var _global = require('../styles/global.js');

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/florian/Dev/OSS/readingit/pages/_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'ReadingIt'), _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement('link', {
        href: 'https://fonts.googleapis.com/css?family=Open+Sans',
        rel: 'stylesheet',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, ' ', _global2.default, ' '), this.props.styleTags), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var sheet = new _styledComponents.ServerStyleSheet();
      var page = renderPage(function (App) {
        return function (props) {
          return sheet.collectStyles(_react2.default.createElement(App, (0, _extends3.default)({}, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          })));
        };
      });
      var styleTags = sheet.getStyleElement();
      return (0, _extends3.default)({}, page, { styleTags: styleTags });
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsImluamVjdEdsb2JhbCIsIlNlcnZlclN0eWxlU2hlZXQiLCJnbG9iYWxTdHlsZXMiLCJNeURvY3VtZW50IiwicHJvcHMiLCJzdHlsZVRhZ3MiLCJyZW5kZXJQYWdlIiwic2hlZXQiLCJwYWdlIiwiY29sbGVjdFN0eWxlcyIsImdldFN0eWxlRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWSxBQUFNLEFBQU07Ozs7QUFDL0IsQUFBUyxBQUFjOztBQUN2QixBQUFPLEFBQWtCOzs7Ozs7Ozs7SUFFSixBOzs7Ozs7Ozs7Ozs2QkFVVixBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBO2NBQUEsQUFDTyxBQUNMO2lCQUZGLEFBRVU7O29CQUZWO3NCQUZGLEFBRUUsQUFJQTtBQUpBO0FBQ0U7Y0FHRixBQUNPLEFBQ0w7YUFGRixBQUVNOztvQkFGTjtzQkFORixBQU1FLEFBSUE7QUFKQTtBQUNFLDBCQUdGLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFBLEFBQVMsdUJBVlgsQUFVRSxBQUNDLFdBQUEsQUFBSyxNQVpWLEFBQ0UsQUFXYyxBQUVkLDRCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBakJOLEFBQ0UsQUFjRSxBQUVFLEFBSVA7QUFKTztBQUFBOzs7OzBDQTNCK0I7VUFBZCxBQUFjLGtCQUFkLEFBQWMsQUFDckM7O1VBQU0sUUFBTixBQUFjLEFBQUksQUFDbEI7VUFBTSxrQkFBa0IsZUFBQTtlQUFPLGlCQUFBO3VCQUM3QixBQUFNLDRDQUFjLEFBQUMsZ0NBQUQsQUFBUzs7d0JBQVQ7MEJBRFMsQUFDN0IsQUFBb0I7QUFBQTtBQUFBLFlBQUEsQ0FBcEI7QUFEc0I7QUFBeEIsQUFBYSxBQUdiLE9BSGE7VUFHUCxZQUFZLE1BQWxCLEFBQWtCLEFBQU0sQUFDeEI7d0NBQUEsQUFBWSxRQUFNLFdBQWxCLEFBQ0Q7Ozs7O0FBUnFDLEE7O2tCQUFuQixBIiwiZmlsZSI6Il9kb2N1bWVudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mbG9yaWFuL0Rldi9PU1MvcmVhZGluZ2l0In0=