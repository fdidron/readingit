const { parse } = require('url');
const pathWrapper = (app, pathName, opts) => (
  { raw: { req, res }, query },
  hapiReply
) => app.renderToHTML(req, res, pathName, query, opts).then(hapiReply);

const defaultHandlerWrapper = app => (
  { raw: { req, res }, url },
  hapiReply
) => {
  const parsedUrl = parse(url, true);
  const { pathname, query } = parsedUrl;
  return app.renderToHTML(req, res, pathname, query).then(hapiReply);
};

module.exports = { pathWrapper, defaultHandlerWrapper };
