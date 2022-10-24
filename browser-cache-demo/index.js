const express = require('express')
const app = express()
const port = 3000

app.all("*", function (req, res, next) {
    console.log(req.originalUrl);
    next();
});

app.use('/public', express.static(__dirname + '/public', {
    etag: true,
    cacheControl: false,
    lastModified: false,
    maxAge: 0,
    // setHeaders: function (res, path, stat) {
    //     res.append('Expires', new Date(new Date().getTime() - 15 * 1000));
    // }
}))



app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})