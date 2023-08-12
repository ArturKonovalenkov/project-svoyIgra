const gameRouter = require("express").Router();
const { Theme, Question } = require("../../db/models");

gameRouter.get("/", async (req, res) => {
  try {
    const themesMeta = await Theme.findAll({ include: [Question] });
    const themes = themesMeta.map((el) => el.get({ plain: true }));
    console.log("themes:", themes);
    res.json(themes);
  } catch (error) {
    res.send(error);
  }
});

module.exports = gameRouter;
