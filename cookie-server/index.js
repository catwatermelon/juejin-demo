const express = require('express')
const app = express()
const port = 3000
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "http://localhost:5500");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");


    if (req.method == 'OPTIONS')
        res.sendStatus(200); //让options尝试请求快速结束
    else
        next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.cookie('name', 'CatWatermelon');
    res.send('set-cookie!')
})


app.get('/httponly', (req, res) => {
    res.setHeader('set-cookie', 'safecookie= safe;httponly')
    res.send('set-safe-cookie!')
})


app.get('/test', (req, res) => {
    res.send({ name: 'CatWatermelon' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})