require("dotenv").config();
require("@babel/register");

const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const session = require("express-session");
const statisticRouter = require("./src/routes/statistic");
const gameRouter = require("./src/routes/gameRouter");
const FileStore = require("session-file-store")(session);

// const dbConnectCheck = require('./db/dbConnectCheck');
// const isAuth = require('./src/middlewares/isAuth');

// Require routes

// Cookie
const sessionConfig = {
  name: "IgraCookie",
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? "Секретное слово",
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 9999999, // * время жизни в мс (ms)
    httpOnly: true,
  },
};

const userRouter = require("./src/routes/user.router");
const statisticAllRouter = require("./src/routes/statisticaAll");

const app = express();
const { PORT } = process.env ?? 3000;

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), "public")));
app.use(session(sessionConfig)); // Подключаем сессии

// dbConnectCheck();

// Routes
app.use("/statistica", statisticRouter);
app.use("/game", gameRouter);
app.use("/user", userRouter);
app.use("/statisticfull", statisticAllRouter);

app.listen(PORT, () => {
  console.log(PORT);
});
