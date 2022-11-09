const Koa = require('koa');
var Router = require('koa-router');
const app = new Koa();
var router = new Router();

const port = 3000;

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  // if (ctx.method === 'OPTIONS') {
  ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
  // ctx.body = '';
  // }
  await next();
});

router.get('/', async (ctx) => {
  ctx.body = 'Hello World!';
})

router.get('/users', async (ctx) => {
  let users = [
    { name: "maoshi", age: 18 },
    { name: "maoshi2", age: 18 },
    { name: "maoshi3", age: 28 }
  ]
  ctx.body = users;
})

router.put('/users', async (ctx) => {
  ctx.body = 'Put Success!';
})


app.use(router.allowedMethods())
  .use(router.routes())
app.listen(port);
console.log(`Server running at localhost:${port}`);