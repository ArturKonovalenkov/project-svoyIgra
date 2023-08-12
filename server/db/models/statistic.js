"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Statistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, { foreignKey: "user_id" });
    }
  }
  Statistic.init(
    {
      user_id: DataTypes.INTEGER,
      points: DataTypes.INTEGER,
      time: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Statistic",
    }
  );
  return Statistic;
};
