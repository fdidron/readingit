'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _decodeHtml = require('decode-html');

var _decodeHtml2 = _interopRequireDefault(_decodeHtml);

var _reactPlayer = require('react-player');

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

var _reactProgressiveImage = require('react-progressive-image');

var _reactProgressiveImage2 = _interopRequireDefault(_reactProgressiveImage);

var _variables = require('../../styles/variables.js');

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/florian/Dev/OSS/readingit/components/post/MediaPreview.js';


var videoPlayerStyle = {
  marginTop: _variables2.default.spacing / 2,
  maxWidth: _variables2.default.mediaPreviewMaxWidth
};

var ImagePreview = _styledComponents2.default.div.withConfig({
  displayName: 'MediaPreview__ImagePreview',
  componentId: 's1lojmcu-0'
})(['background-color:', ';background-size:contain;background-position:center center;background-repeat:no-repeat;margin-top:', 'px;opacity:', ';transition:opacity 0.4444s ease-in-out;height:', 'px;max-width:', 'px;width:100%;'], function (props) {
  return props.theme.backgroundColor;
}, function (props) {
  return props.theme.spacing / 2;
}, function (props) {
  return props.loading ? 0.5 : 1;
}, function (props) {
  return props.theme.mediaPreviewMaxHeight;
}, function (props) {
  return props.theme.mediaPreviewMaxWidth;
});

exports.default = function (_ref) {
  var postHint = _ref.postHint,
      preview = _ref.preview,
      isSelf = _ref.isSelf,
      selfText = _ref.selfText,
      title = _ref.title,
      thumbnail = _ref.thumbnail,
      url = _ref.url;

  switch (postHint) {
    case 'rich:video':
      if (url) {
        return _react2.default.createElement(_reactPlayer2.default, {
          height: _variables2.default.mediaPreviewMaxHeight,
          style: videoPlayerStyle,
          url: url,
          width: '100%',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        });
      } else return null;
      break;
    case 'image':
      if (preview.enabled === true) {
        var images = preview.images;

        if (images.length === 1) {
          return _react2.default.createElement(_reactProgressiveImage2.default, { preview: thumbnail, src: url, __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }, function (src, loading) {
            return _react2.default.createElement(ImagePreview, {
              loading: loading,
              style: { backgroundImage: 'url(' + src + ')' },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              }
            });
          });
        }
      } else return null;
    default:
      return null;
      break;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcG9zdC9NZWRpYVByZXZpZXcuanMiXSwibmFtZXMiOlsic3R5bGVkIiwiZGVjb2RlSHRtbCIsIlJlYWN0UGxheWVyIiwiUHJvZ3Jlc3NpdmVJbWFnZSIsInZhcmlhYmxlcyIsInZpZGVvUGxheWVyU3R5bGUiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWF4V2lkdGgiLCJtZWRpYVByZXZpZXdNYXhXaWR0aCIsIkltYWdlUHJldmlldyIsImRpdiIsInByb3BzIiwidGhlbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsb2FkaW5nIiwibWVkaWFQcmV2aWV3TWF4SGVpZ2h0IiwicG9zdEhpbnQiLCJwcmV2aWV3IiwiaXNTZWxmIiwic2VsZlRleHQiLCJ0aXRsZSIsInRodW1ibmFpbCIsInVybCIsImVuYWJsZWQiLCJpbWFnZXMiLCJsZW5ndGgiLCJzcmMiLCJiYWNrZ3JvdW5kSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFlOzs7Ozs7Ozs7QUFFdEIsSUFBTTthQUNPLG9CQUFBLEFBQVUsVUFERSxBQUNRLEFBQy9CO1lBQVUsb0JBRlosQUFBeUIsQUFFSDtBQUZHLEFBQ3ZCOztBQUlGLElBQU0sMENBQUEsQUFBc0I7ZUFBdEI7ZUFBQTtBQUFBLENBQWUsb09BQ0MsaUJBQUE7U0FBUyxNQUFBLEFBQU0sTUFBZixBQUFxQjtBQURyQyxHQUtVLGlCQUFBO1NBQVMsTUFBQSxBQUFNLE1BQU4sQUFBWSxVQUFyQixBQUErQjtBQUx6QyxHQU1PLGlCQUFBO1NBQVUsTUFBQSxBQUFNLFVBQU4sQUFBZ0IsTUFBMUIsQUFBZ0M7QUFOdkMsR0FRTSxpQkFBQTtTQUFTLE1BQUEsQUFBTSxNQUFmLEFBQXFCO0FBUjNCLEdBU1MsaUJBQUE7U0FBUyxNQUFBLEFBQU0sTUFBZixBQUFxQjtBQVRwQyxBQUFNLEFBYU47O2tCQUFlLGdCQVFUO01BUEosQUFPSSxnQkFQSixBQU9JO01BTkosQUFNSSxlQU5KLEFBTUk7TUFMSixBQUtJLGNBTEosQUFLSTtNQUpKLEFBSUksZ0JBSkosQUFJSTtNQUhKLEFBR0ksYUFISixBQUdJO01BRkosQUFFSSxpQkFGSixBQUVJO01BREosQUFDSSxXQURKLEFBQ0ksQUFDSjs7VUFBQSxBQUFRLEFBQ047U0FBQSxBQUFLLEFBQ0g7VUFBQSxBQUFJLEtBQUssQUFDUDsrQkFDRSxBQUFDO2tCQUNTLG9CQURWLEFBQ29CLEFBQ2xCO2lCQUZGLEFBRVMsQUFDUDtlQUhGLEFBR08sQUFDTDtpQkFKRixBQUlROztzQkFKUjt3QkFERixBQUNFLEFBT0g7QUFQRztBQUNFLFNBREY7QUFGSixhQVNPLE9BQUEsQUFBTyxBQUNkO0FBQ0Y7U0FBQSxBQUFLLEFBQ0g7VUFBSSxRQUFBLEFBQVEsWUFBWixBQUF3QixNQUFNO1lBQUEsQUFDcEIsU0FEb0IsQUFDVCxRQURTLEFBQ3BCLEFBQ1I7O1lBQUksT0FBQSxBQUFPLFdBQVgsQUFBc0IsR0FBRyxBQUN2QjtpQ0FDRSxBQUFDLGlEQUFpQixTQUFsQixBQUEyQixXQUFXLEtBQXRDLEFBQTJDO3dCQUEzQzswQkFBQSxBQUNHO0FBREg7V0FBQSxZQUNHLEFBQUMsS0FBRCxBQUFNLFNBQU47aURBQ0MsQUFBQzt1QkFBRCxBQUNXLEFBQ1Q7cUJBQU8sRUFBRSwwQkFBQSxBQUF3QixNQUZuQyxBQUVTOzswQkFGVDs0QkFERCxBQUNDO0FBQUE7QUFDRSxhQURGO0FBSE4sQUFDRSxBQVNIO0FBQ0Y7QUFkRCxhQWNPLE9BQUEsQUFBTyxBQUNoQjtBQUNFO2FBQUEsQUFBTyxBQUNQO0FBL0JKLEFBaUNEOztBQTFDRCIsImZpbGUiOiJNZWRpYVByZXZpZXcuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZmxvcmlhbi9EZXYvT1NTL3JlYWRpbmdpdCJ9