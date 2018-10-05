require('./mongo/connect')
const api = require('./controller')
const bodyParser = require('koa-bodyparser');

const Koa = require('koa');
const app = new Koa();

app.use(bodyParser())
app.use(api())

app.listen(3001);