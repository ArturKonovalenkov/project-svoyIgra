"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme }) {
      // define association here
      this.belongsTo(Theme, { foreignKey: "theme_id" });
    }
  }
  Question.init(
    {
      theme_id: DataTypes.INTEGER,
      quest_body: DataTypes.TEXT,
      right_answer: DataTypes.STRING,
      points: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
