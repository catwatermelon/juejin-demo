const Koa = require('koa');
var Router = require('koa-router' );
const app = new Koa();
var router = new Router();
const cors = require('koa2-cors')
app.use(cors({
  allowMethods: ['POST', 'DELETE', 'PUT']  //设置允许的请求方法
}));
const port = 3000;

app.use(async (ctx, next) => {
  ctx.body = 'Request Success!'
  await next();
});

router.get('/users', async(ctx) => {
    let users = [
        {name:"maoshi", age: 18},
        {name:"maoshi2", age: 18},
        {name:"maoshi3", age: 28}
    ]
    ctx.body = users;
})

router.put('/users', async(ctx) => {
  ctx.body = 'Put Success!';
})


app.use(router.allowedMethods())
   .use(router.routes())
app.listen(port);
console.log(`Server running at localhost:${port}`);