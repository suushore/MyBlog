const Koa = require('koa');
const next = require('next');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const helmet = require('koa-helmet');
const logger = require('koa-logger');
const getPort = require('get-port');
const requestId = require('koa-requestid');

const log = require('./helpers/log');
const config = require('../config/config.global');
const router = require('./routes');

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({
  dev,
  dir: './src'
});

const handle = nextApp.getRequestHandler();

nextApp.prepare()
  .then(() => {
    const app = new Koa();
    !dev ? app.use(logger()) : '';
    app.use(koaBody({ multipart: true }));
    app.use(requestId());
    app.use(helmet());
    app.use(cors({
      exposeHeaders: ['X-Request-Id']
    }));//允许跨域
    app.use(router.routes());
    app.use(router.allowedMethods());
    router.nextRoute(nextApp, handle);
    (async () => {
      let port = await getPort({ port: [config[env].port, 3000, 3001, 3002] })
      app.listen(port, config[env].host, () => {
        log.info(`API server listening on ${config[env].host}:${port}, in ${env}`);
      });
    })();
  })
  .catch((ex) => {
    log.error(ex.stack)
    process.exit(1)
  });
