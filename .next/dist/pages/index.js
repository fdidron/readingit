'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _reactFlexa = require('react-flexa');

var _client = require('../libs/reddit/client.js');

var _client2 = _interopRequireDefault(_client);

var _Card = require('../components/ui/Card.js');

var _Card2 = _interopRequireDefault(_Card);

var _Layout = require('../components/ui/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _Listing = require('../components/listings/Listing.js');

var _Listing2 = _interopRequireDefault(_Listing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/florian/Dev/OSS/readingit/pages/index.js?entry';


var HomePage = function (_React$Component) {
  (0, _inherits3.default)(HomePage, _React$Component);

  function HomePage() {
    (0, _classCallCheck3.default)(this, HomePage);

    return (0, _possibleConstructorReturn3.default)(this, (HomePage.__proto__ || (0, _getPrototypeOf2.default)(HomePage)).apply(this, arguments));
  }

  (0, _createClass3.default)(HomePage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_reactFlexa.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_reactFlexa.Col, { xs: 12, sm: 8, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_Card2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_Listing2.default, { listing: this.props.data, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }))), _react2.default.createElement(_reactFlexa.Col, { xs: 12, sm: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_Card2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'Sidebar'))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req,
            _ref$query = _ref.query,
            category = _ref$query.category,
            domain = _ref$query.domain;

        var endpoint, _ref3, data;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                endpoint = 'hot';

                if (category) endpoint = category;
                if (domain) endpoint = 'domain/' + domain;
                _context.next = 5;
                return (0, _client2.default)({ endpoint: endpoint });

              case 5:
                _ref3 = _context.sent;
                data = _ref3.data;
                return _context.abrupt('return', { data: data });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return HomePage;
}(_react2.default.Component);

exports.default = HomePage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJvdyIsIkNvbCIsImFwaSIsIkNhcmQiLCJMYXlvdXQiLCJMaXN0aW5nIiwiSG9tZVBhZ2UiLCJwcm9wcyIsImRhdGEiLCJyZXEiLCJxdWVyeSIsImNhdGVnb3J5IiwiZG9tYWluIiwiZW5kcG9pbnQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQUs7O0FBQ2QsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7Ozs7Ozs7SSxBQUVDOzs7Ozs7Ozs7Ozs2QkFTVixBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxpQ0FBSSxJQUFMLEFBQVMsSUFBSSxJQUFiLEFBQWlCO29CQUFqQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxtQ0FBUSxTQUFTLEtBQUEsQUFBSyxNQUF2QixBQUE2QjtvQkFBN0I7c0JBSE4sQUFDRSxBQUNFLEFBQ0UsQUFHSjtBQUhJOzRCQUdKLEFBQUMsaUNBQUksSUFBTCxBQUFTLElBQUksSUFBYixBQUFpQjtvQkFBakI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7O29CQUFEO3NCQUFBO0FBQUE7QUFBQSxTQVRSLEFBQ0UsQUFDRSxBQU1FLEFBQ0UsQUFLVDs7Ozs7O1ksQUF2QjhCLFcsQUFBQTs4QkFBSyxBO1lBQVMsQSxzQkFBQSxBO1lBQVUsQSxvQixBQUFBOzs7Ozs7O21CQUNqRDtBLDJCQUFXLEEsQUFDZjs7b0JBQUEsQUFBSSxVQUFVLFdBQUEsQUFBVyxBQUN6QjtvQkFBQSxBQUFJLFFBQVEsdUJBQUEsQUFBcUI7O3VCQUNWLHNCQUFJLEVBQUUsVUFBTixBQUFJLEE7OztpQ0FBbkI7QSw2QkFBQSxBO2lEQUNELEVBQUUsTUFBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBTjJCLGdCQUFNLEE7O2tCQUF2QixBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2Zsb3JpYW4vRGV2L09TUy9yZWFkaW5naXQifQ==