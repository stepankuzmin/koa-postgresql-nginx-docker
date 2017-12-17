const Koa = require('koa');
const compress = require('koa-compress');
const conditional = require('koa-conditional-get');
const etag = require('koa-etag');
const error = require('koa-error');
const morgan = require('koa-morgan');
const middleware = require('./middleware');

const app = new Koa();

app.use(error());
app.use(morgan('combined'));
app.use(compress());
app.use(conditional());
app.use(etag());

app.use(middleware());

app.listen(4000, () => {
  process.stdout.write('Server started on port 4000.\n');
});
