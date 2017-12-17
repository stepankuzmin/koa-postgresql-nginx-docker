const fs = require('fs');
const Koa = require('koa');
// const Pool = require('pg-pool');
// const bluebird = require('bluebird');
// const JSONStream = require('JSONStream');
// const QueryStream = require('pg-query-stream');
// const { PassThrough } = require('stream');

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'data',
//   password: 'postgres',
//   poolSize: 20,
//   Promise: bluebird
// });

const app = new Koa();

// app.use(async (ctx, next) => {
//   console.log('error-handler');
//   try {
//     await next();
//   } catch (err) {
//     console.log('error-catch');
//     ctx.status = err.status || 500;
//     ctx.body = err.message;
//     ctx.app.emit('error', err, ctx);
//   }
// });

app.use(async (ctx) => {
  fs.createReadStream('/Users/stepan/Downloads/kuzminki_draw.tif').pipe(ctx.res);
  ctx.respond = false;

  // try {
  //   const client = await pool.connect();
  //   const query = new QueryStream('SELECT * FROM generate_series(0, $1) num', [10000]);
  //   const stream = client.query(query);

  //   // release the client when the stream is finished
  //   stream.on('end', () => client.release());
  //   stream.pipe(JSONStream.stringify()).pipe(res);
  // } catch (error) {
  //   console.error(error);
  // }
});

app.listen(4000, () => {
  process.stdout.write('Server started on port 4000.\n');
});
