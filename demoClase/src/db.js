const { Sequelize } = require("sequelize");
const User = require("./models/User");
const Post = require("./models/Post");
//
const user = "postgres";
const pass = "admin";
const dbname = "lecture";

const database = new Sequelize(
  `postgres://${user}:${pass}@localhost:5432/${dbname}`,
  { logging: false }
);

User(database);
Post(database);

console.log(database.models);

module.exports = { database, ...database.models };
