const compose = require('koa-compose');
const Router = require('koa-router');
const convert = require('koa-convert');
const article = require('./article')


module.exports = function api() {
  const router = new Router({
    prefix: '/api'
  });

  article(router)

  return convert.compose([
    router.routes(),
    router.allowedMethods(),
  ]);
}
