const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const sessions = require("express-session");
const cookieParser = require("cookie-parser");

const userRouter = require("./src/routes/users.router");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//            detik
const oneDay = 1000 * 60 * 60 * 24;
app.use(
  sessions({
    secret: "test123OKE",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);
app.use(cookieParser());

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(userRouter);

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("Service running on port 3000");
});
