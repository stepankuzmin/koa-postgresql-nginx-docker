const promise = require('bluebird');
const pgPromise = require('pg-promise');

const initOptions = {
  promiseLib: promise
};

const pgp = pgPromise(initOptions);
pgp.pg.defaults.poolSize = 20;

const db = pgp(process.env.DATABASE_URL);
module.exports = db;
