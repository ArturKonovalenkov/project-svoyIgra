const express = require("express");

const statisticAllRouter = express.Router();

const { Statistic, User } = require("../../db/models");

statisticAllRouter.get("/", async (req, res) => {
  try {
    const statisticAll = await Statistic.findAll({
      order: [["points", "DESC"]],
      raw: true,
    });
    res.json(statisticAll);
  } catch (error) {
    console.error("error StatisticAll", error);
  }
});
statisticAllRouter.get("/user", async (req, res) => {
  try {
    const userAll = await User.findAll({ raw: true });
    res.json(userAll);
  } catch (error) {
    console.error("error userAll", error);
  }
});

module.exports = statisticAllRouter;
