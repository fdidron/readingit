const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get('/domain/:domain', async ctx => {
    const { domain } = ctx.params;
    await app.render(
      ctx.req,
      ctx.res,
      '/',
      Object.assign(ctx.query, { domain })
    );
  });

  router.get('/:category', async ctx => {
    const categories = [
      'hot',
      'new',
      'rising',
      'controversial',
      'top',
      'gilded'
    ];
    const { category } = ctx.params;
    if (categories.includes(category)) {
      await app.render(
        ctx.req,
        ctx.res,
        '/',
        Object.assign(ctx.query, { category })
      );
    } else {
      await handle(ctx.req, ctx.res);
    }
    ctx.respond = false;
  });

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
