const Pool = require('pg-pool');
const bluebird = require('bluebird');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'data',
  password: 'postgres',
  poolSize: 20,
  Promise: bluebird
});

module.exports = pool;
