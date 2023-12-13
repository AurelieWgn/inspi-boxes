import { DATABASENAME, DIALECT, HOST, PASSWORD, USERNAME } from 'src/env';

module.exports = {
  local: {
    dialect: DIALECT,
    username: USERNAME,
    password: PASSWORD,
    database: DATABASENAME,
    host: HOST,
  },
  development: {
    dialect: DIALECT,
    username: USERNAME,
    password: PASSWORD,
    database: DATABASENAME,
    host: HOST,
  },

  production: {
    dialect: DIALECT,
    username: USERNAME,
    password: PASSWORD,
    database: DATABASENAME,
    host: HOST,
  },
};
