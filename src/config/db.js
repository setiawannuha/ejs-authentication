const { Client } = require("pg");

const connection = new Client({
  host: "localhost",
  user: "postgres",
  password: "password",
  database: "db_latihan4",
  port: 5432,
});
connection.connect();

module.exports = connection;
