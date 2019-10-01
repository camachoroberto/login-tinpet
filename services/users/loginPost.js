// User model
const bcrypt = require("bcrypt");
const User = require("../../models/user");

const loginPost = (req, res, next) => {
  const theNickname = req.body.nickname;
  const thePassword = req.body.password;

  if (theNickname === "" || thePassword === "") {
    res.render("auth/login", {
      errorMessage: "Digite nome de usuário e senha para se inscrever."
    });
    return;
  }

  User.findOne({ nickname: theNickname })
    .then(user => {
      if (!user) {
        res.render("auth/login", {
          errorMessage: "O nome de usuário não existe."
        });
        return;
      }
      if (bcrypt.compareSync(thePassword, user.password)) {
        // Save the login in the session!
        req.session.currentUser = user;
        res.redirect("/");
      } else {
        res.render("auth/login", {
          errorMessage: "Senha incorreta"
        });
      }
    })
    .catch(error => {
      next(error);
    });
};

module.exports = loginPost;
