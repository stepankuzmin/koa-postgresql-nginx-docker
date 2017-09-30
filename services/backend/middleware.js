const JSONStream = require('streaming-json-stringify');
const QueryStream = require('pg-query-stream');
// const { PassThrough } = require('stream');

module.exports = db => async (ctx) => {
  const stream = JSONStream();
  ctx.body = stream;

  stream.on('error', ctx.onerror);

  const qs = new QueryStream('select * from users');
  db
    .stream(qs, (s) => {
      s.on('error', ctx.onerror);
      s.pipe(stream);
    })
    .then((data) => {
      console.log(
        'Total rows processed:',
        data.processed,
        'Duration in milliseconds:',
        data.duration
      );
    })
    .catch((error) => {
      console.log('ERROR:', error);
    });
};
