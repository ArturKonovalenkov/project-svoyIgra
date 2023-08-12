const express = require("express");

const statisticRouter = express.Router();

const { Statistic } = require("../../db/models");

statisticRouter.get("/", async (req, res) => {
  try {
    const { id } = req.session.user;
    const statistica = await Statistic.findAll({
      where: { user_id: id },
      order: [["createdAt", "DESC"]],
      raw: true,
    });
    res.json(statistica);
  } catch (error) {
    console.error("error Statistica", error);
  }
});

statisticRouter.post("/", async (req, res) => {
  const { id } = req.session.user;
  const { points, time } = req.body;
  try {
    const newStatistic = await Statistic.create({ user_id: id, points, time });
    res.json(newStatistic);
  } catch (error) {
    res.send(error);
  }
});

module.exports = statisticRouter;
