const { Router } = require("express");
const db = require("../db");
const { Op, Character, Role } = require("../db");
const router = Router();

router.post("/", async (req, res) => {
  try {
    const { code, name, hp, mana } = req.body;
    if (!code || !name || !hp || !mana) {
      return res.status(404).send("Falta enviar datos obligatorios");
    }
    const newCharacter = await Character.create(req.body);

    res.status(201).json(newCharacter);
  } catch (err) {
    res.status(404).send("Error en alguno de los datos provistos");
  }
});

module.exports = router;
