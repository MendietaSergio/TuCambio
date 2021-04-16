module.exports = {
  "development": {
    "username": USERNAME_DB,
    "password": PASSWORD_DB,
    "database": DATABASE_DB,
    "host": HOST_DB,
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
    "username": USERNAME_DB,
    "password": PASSWORD_DB,
    "database": DATABASE_DB,
    "host": HOST_DB,
    "dialect": "mysql",
    "root": 3306
  }
}
