const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Ability",
    {
      // id: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true,
      //   autoIncrement: true,
      //   allowNull: false,
      // },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "name+mana_cost",
      },
      description: {
        type: DataTypes.TEXT,
      },
      mana_cost: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: "name+mana_cost",
      },
    }
    // {
    //   uniqueKeys: {
    //     items_unique: {
    //       fields: ["name", "mana_cost"],
    //     },
    //   },
    // }
  );
};
