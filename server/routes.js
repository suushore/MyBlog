const Router = require('koa-router');
const LRUCache = require('lru-cache');
const mockController = require('./controllers/mock.controller');
const fileupload = require('./controllers/fileupload');
const router = new Router();

router.get('/welcome', mockController.welcome);
// router.post('/fileupload/markdown', fileupload())
router.nextRoute = (nextApp,handle) => {
  router.get('*', async (ctx) => {
    handle(ctx.req, ctx.res);
    ctx.respond = false;
  });
};

module.exports = router;
