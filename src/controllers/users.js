const usersModel = require("../models/users.model");
module.exports = {
  loginPage: (req, res) => {
    res.render("auth/login.ejs");
  },
  loginAuth: (req, res) => {
    usersModel
      .checkUsername(req.body.username)
      .then((result) => {
        if (req.body.role) {
          res.redirect("/choose-role");
        } else {
          // role by databse
        }
      })
      .catch((err) => {
        res.json(err);
      });
  },
  chooseRolePage: (req, res) => {
    res.render("auth/choose_role.ejs");
  },
  adminPage: (req, res) => {
    res.render("users/admin.ejs");
  },
  guestPage: (req, res) => {
    res.render("users/guest.ejs");
  },
};
