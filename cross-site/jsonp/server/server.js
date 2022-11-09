const Koa = require('koa');
var Router = require('koa-router');
const bodyparser = require('koa-bodyparser');  //处理post请求体
const app = new Koa();
var router = new Router();
app.use(bodyparser());  //配置中间件

const port = 3000;
app.use(async (ctx, next) => {
  ctx.body = 'Hello World';
  await next()
});

app.use(router.routes()).use(router.allowedMethods())
router.get('/users', async (ctx) => {
  let callbackName = ctx.query.cb || (() => { });
  let users = [
    { name: "maoshi", age: 18 },
    { name: "maoshi2", age: 18 },
    { name: "maoshi3", age: 28 }
  ]
  let paramStr = `${callbackName}(${JSON.stringify(users)})`
  console.log(paramStr)
  ctx.body = paramStr;
})

router.put('/users', async (ctx) => {
  let callbackName = ctx.query.cb || (() => { });
  let users = [
    { name: "maoshi", age: 18 },
    { name: "maoshi2", age: 18 },
    { name: "maoshi3", age: 28 }
  ]
  let paramStr = `${callbackName}(${JSON.stringify(users)})`
  console.log(paramStr)
  ctx.body = paramStr;
})

app.listen(port);
console.log(`Server running at localhost:${port}`);