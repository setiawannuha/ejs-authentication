const usersModel = require("../models/users.model");
module.exports = {
  loginPage: (req, res) => {
    res.render("auth/login.ejs");
  },
  loginAuth: (req, res) => {
    let session = req.session;
    usersModel
      .checkUsername(req.body.username)
      .then((result) => {
        session.userId = result.rows[0].id;
        if (req.body.role) {
          res.redirect(`/choose-role`);
        } else {
          session.role = result.rows[0].role;
          if (result.rows[0].role == 1) {
            res.redirect("/admin");
          } else if (result.rows[0].role == 0) {
            res.redirect("/guest");
          }
        }
      })
      .catch((err) => {
        res.json(err);
      });
  },
  chooseRolePage: (req, res) => {
    res.render("auth/choose_role.ejs");
  },
  chooseRole: (req, res) => {
    let session = req.session;
    session.role = parseInt(req.body.role);
    if (req.body.role == 1) {
      res.redirect("/admin");
    } else if (req.body.role == 0) {
      res.redirect("/guest");
    }
  },
  adminPage: (req, res) => {
    console.log(req.session);
    res.render("users/admin.ejs");
  },
  guestPage: (req, res) => {
    console.log(req.session);
    res.render("users/guest.ejs");
  },
};
