'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactFlexa = require('react-flexa');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _MediaPreview = require('../post/MediaPreview.js');

var _MediaPreview2 = _interopRequireDefault(_MediaPreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/florian/Dev/OSS/readingit/components/listings/Listing.js';


var PostContainer = (0, _styledComponents2.default)(_reactFlexa.Row).withConfig({
  displayName: 'Listing__PostContainer',
  componentId: 'ha75gs-0'
})(['margin-bottom:', 'px;margin-top:', 'px;'], function (props) {
  return props.theme.spacing * 3;
}, function (props) {
  return props.theme.spacing;
});

var Links = _styledComponents2.default.a.withConfig({
  displayName: 'Listing__Links',
  componentId: 'ha75gs-1'
})(['color:', ';cursor:pointer;font-size:0.8em;'], function (props) {
  return props.theme.secondaryColor;
});

var PostTitle = _styledComponents2.default.h1.withConfig({
  displayName: 'Listing__PostTitle',
  componentId: 'ha75gs-2'
})(['color:', ';display:inline;font-size:1.1em;'], function (props) {
  return props.theme.headingColor;
});

var PostMeta = _styledComponents2.default.div.withConfig({
  displayName: 'Listing__PostMeta',
  componentId: 'ha75gs-3'
})(['font-size:0.8em;margin:', 'px 0px;'], function (props) {
  return props.theme.spacing / 2;
});

var Post = function Post(_ref) {
  var author = _ref.author,
      _ref$commentsCount = _ref.commentsCount,
      commentsCount = _ref$commentsCount === undefined ? 0 : _ref$commentsCount,
      domain = _ref.domain,
      media = _ref.media,
      permalink = _ref.permalink,
      postHint = _ref.postHint,
      preview = _ref.preview,
      isSelf = _ref.isSelf,
      selfText = _ref.selfText,
      subreddit = _ref.subreddit,
      title = _ref.title,
      thumbnail = _ref.thumbnail,
      url = _ref.url;
  return _react2.default.createElement(PostContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement(_reactFlexa.Col, { xs: 12, sm: 10, __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement(PostTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, title, ' '), _react2.default.createElement(_link2.default, { href: '/domain/' + domain, __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement(Links, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, domain)), _react2.default.createElement(PostMeta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, 'by ', author, ' \u2219 date in', ' ', _react2.default.createElement(_link2.default, { href: '/' + subreddit, __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, _react2.default.createElement(Links, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, subreddit))), _react2.default.createElement(_MediaPreview2.default, {
    media: media,
    postHint: postHint,
    preview: preview,
    isSelf: isSelf,
    selfText: selfText,
    title: title,
    thumbnail: thumbnail,
    url: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }), _react2.default.createElement(PostMeta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, _react2.default.createElement(_link2.default, { href: '' + permalink, __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, _react2.default.createElement(Links, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, _react2.default.createElement('b', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, commentsCount, ' comments'))))));
};

exports.default = function (_ref2) {
  var listing = _ref2.listing;
  return listing.children.map(function (_ref3) {
    var data = _ref3.data;

    //console.log(data, data.post_hint);
    return _react2.default.createElement(Post, {
      author: data.author,
      commentsCount: data.num_comments,
      createdAt: data.created,
      domain: data.domain,
      isSelf: data.is_self,
      key: data.id,
      permalink: data.permalink,
      postHint: data.post_hint,
      media: data.secure_media_embed,
      preview: data.preview,
      selfText: data.selftext,
      subreddit: data.subreddit_name_prefixed,
      title: data.title,
      thumbnail: data.thumbnail,
      url: data.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      }
    });
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGlzdGluZ3MvTGlzdGluZy5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDb2wiLCJSb3ciLCJMaW5rIiwiTWVkaWFQcmV2aWV3IiwiUG9zdENvbnRhaW5lciIsInByb3BzIiwidGhlbWUiLCJzcGFjaW5nIiwiTGlua3MiLCJhIiwic2Vjb25kYXJ5Q29sb3IiLCJQb3N0VGl0bGUiLCJoMSIsImhlYWRpbmdDb2xvciIsIlBvc3RNZXRhIiwiZGl2IiwiUG9zdCIsImF1dGhvciIsImNvbW1lbnRzQ291bnQiLCJkb21haW4iLCJtZWRpYSIsInBlcm1hbGluayIsInBvc3RIaW50IiwicHJldmlldyIsImlzU2VsZiIsInNlbGZUZXh0Iiwic3VicmVkZGl0IiwidGl0bGUiLCJ0aHVtYm5haWwiLCJ1cmwiLCJsaXN0aW5nIiwiY2hpbGRyZW4iLCJtYXAiLCJkYXRhIiwibnVtX2NvbW1lbnRzIiwiY3JlYXRlZCIsImlzX3NlbGYiLCJpZCIsInBvc3RfaGludCIsInNlY3VyZV9tZWRpYV9lbWJlZCIsInNlbGZ0ZXh0Iiwic3VicmVkZGl0X25hbWVfcHJlZml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFLOztBQUNkLEFBQU87Ozs7QUFFUCxBQUFPLEFBQWtCOzs7Ozs7Ozs7QUFFekIsSUFBTTtlQUFBO2VBQUE7QUFBQSxDQUFBLEFBQWdCLEFBQU8sK0NBQ1YsaUJBQUE7U0FBUyxNQUFBLEFBQU0sTUFBTixBQUFZLFVBQXJCLEFBQStCO0FBRDVDLEdBRVUsaUJBQUE7U0FBUyxNQUFBLEFBQU0sTUFBZixBQUFxQjtBQUZyQyxBQUFNOztBQUtOLElBQU0sbUNBQUEsQUFBZTtlQUFmO2VBQUE7QUFBQSxDQUFRLGtEQUNILGlCQUFBO1NBQVMsTUFBQSxBQUFNLE1BQWYsQUFBcUI7QUFEaEMsQUFBTTs7QUFNTixJQUFNLHVDQUFBLEFBQW1CO2VBQW5CO2VBQUE7QUFBQSxDQUFZLGtEQUNQLGlCQUFBO1NBQVMs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