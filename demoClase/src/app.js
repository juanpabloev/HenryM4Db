const express = require("express");
const morgan = require("morgan");
const { User } = require("./db");

const server = express();
server.use(express.json());
server.use(morgan("dev"));

server.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

server.post("/users", async (req, res) => {
  // crear un usuario en la base de datos
  try {
    const { name, last_name, birth } = req.body;
    const newUser = await User.create({ name, last_name, birth });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

server.delete("/users", async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.findByPk(id);
    await user.destroy();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = server;
