module.exports = {
  "development": {
    "username": process.env.USERNAME_DB,
    "password": process.env.PASSWORD_DB,
    "database": process.env.DATABASE_DB,
    "host": process.env.HOST_DB,
    "dialect": "mysql",
    "root": 3306
  },
  // "development": {
  //   "username": "root",
  //   "password": null,
  //   "database": "DB_Saldo",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql",
  //   "root": 3306
  // },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.USERNAME_DB,
    "password": process.env.PASSWORD_DB,
    "database": process.env.DATABASE_DB,
    "host": process.env.HOST_DB,
    "dialect": "mysql",
    "root": 3306
  }
}
