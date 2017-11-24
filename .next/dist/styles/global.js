'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _styledReset = require('styled-reset');

var _styledReset2 = _interopRequireDefault(_styledReset);

var _variables = require('./variables.js');

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var backgroundColor = _variables2.default.backgroundColor,
    textColor = _variables2.default.textColor,
    primaryColor = _variables2.default.primaryColor,
    white = _variables2.default.white;

var globalStyles = '\n  body {\n    background-color: ' + backgroundColor + ';\n    color: ' + textColor + ';\n  }\n  ::selection {\n    background-color: ' + primaryColor + ';\n    color: ' + white + ';\n    font-family: \'Open Sans\', sans-serif;\n  }\n';

exports.default = '\n  ' + _styledReset2.default + '\n  ' + globalStyles + '\n';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy9nbG9iYWwuanMiXSwibmFtZXMiOlsicmVzZXQiLCJ2YXJpYWJsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0Q29sb3IiLCJwcmltYXJ5Q29sb3IiLCJ3aGl0ZSIsImdsb2JhbFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXNCLEFBQXRCOzs7Ozs7SUFDUSxBLGtCQUFvRCxBLG9CQUFwRCxBO0lBQWlCLEEsWUFBbUMsQSxvQkFBbkMsQTtJQUFXLEEsZUFBd0IsQSxvQkFBeEIsQTtJQUFjLEEsUUFBVSxBLG9CQUFWLEE7O0FBRWxELElBQU0sc0RBRWtCLEFBRmxCLHFDQUdPLEFBSFAsZ0VBTWtCLEFBTmxCLGtDQU9PLEFBUFAsUUFBTixBQVlBOztrQkFDSSxBQURKLDBDQUVJLEFBRkoiLCJmaWxlIjoiZ2xvYmFsLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2Zsb3JpYW4vRGV2L09TUy9yZWFkaW5naXQifQ==