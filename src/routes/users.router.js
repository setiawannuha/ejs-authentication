const express = require("express");
const {
  loginPage,
  adminPage,
  guestPage,
  loginAuth,
  chooseRolePage,
} = require("../controllers/users");

const router = express.Router();

router
  .get("/login", loginPage)
  .get("/admin", adminPage)
  .get("/guest", guestPage)
  .post("/login", loginAuth)
  .get("/choose-role", chooseRolePage);

module.exports = router;
