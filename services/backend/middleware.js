const JSONStream = require('JSONStream');
const QueryStream = require('pg-query-stream');
const { PassThrough } = require('stream');
const pool = require('./pool');

module.exports = () => async (ctx) => {
  const bodyStream = PassThrough();
  ctx.body = bodyStream;

  try {
    const client = await pool.connect();
    const query = new QueryStream('SELECT * FROM generate_series(0, $1) num', [10000]);
    const stream = client.query(query);

    // release the client when the stream is finished
    stream.on('end', () => client.release());
    stream.pipe(JSONStream.stringify()).pipe(bodyStream);
  } catch (error) {
    console.log('error', error);
    console.error(error);
  }
};
