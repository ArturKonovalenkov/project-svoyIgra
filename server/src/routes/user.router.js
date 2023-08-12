const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");

router.get("/", (req, res) => {
  res.json({ login: req.session?.user.login, id: req.session?.user.id || "" });
});

router.post("/reg", async (req, res) => {
  const { email, login, password } = req.body;
  try {
    if (!email || !login || !password) {
      return res.status(400).json({ message: "Заполните поля" });
    }
    const isEmailExist = (await User.findOne({ where: { email } })) !== null;
    const isLoginExist = (await User.findOne({ where: { login } })) !== null;
    if (isEmailExist) {
      return res
        .status(400)
        .json({ message: "Пользователь с таким email уже существует" });
    }
    if (isLoginExist) {
      return res
        .status(400)
        .json({ message: "Пользователь с таким login уже существует" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const userData = await User.create({
      email,
      login,
      password: hashPassword,
    });
    const user = userData.get({ plain: true });
    req.session.user = user;
    req.session.save(() => {
      res.json({ login: user.login, id: user.id });
    });
    // res.end();
  } catch (error) {
    console.error(error);
    res.json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Заполните поля" });
  }
  const userData = await User.findOne({ where: { email } });
  if (!userData) {
    return res
      .status(400)
      .json({ message: "Пользователь с таким email не зарегестрирован" });
  }
  const user = userData.get({ plain: true });
  try {
    const passwordCheck = await bcrypt.compare(password, user.password);
    if (passwordCheck) {
      req.session.user = user;
      req.session.save(() => {
        res.json({ login: user.login, id: user.id });
      });
    } else {
      res.status(400).json({ message: "Неверный пароль" });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("IgraCookie");
    res.json({ user: "" });
  });
});

module.exports = router;
