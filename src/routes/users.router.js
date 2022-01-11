const express = require("express");
const {
  loginPage,
  adminPage,
  guestPage,
  loginAuth,
  chooseRolePage,
  chooseRole,
} = require("../controllers/users");

const router = express.Router();

router
  .get("/login", loginPage)
  .get("/admin", adminPage)
  .get("/guest", guestPage)
  .post("/login", loginAuth)
  .get("/choose-role", chooseRolePage)
  .post("/choose-role", chooseRole);

module.exports = router;
