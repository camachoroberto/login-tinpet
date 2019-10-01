// User model
const bcrypt = require("bcrypt");
const User = require("../../models/user");

// BCrypt to encrypt passwords
const bcryptSalt = 10;

const signupPost = (req, res, next) => {
  const { name, password, phone, email, birthDate } = req.body;

  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

  if (email === "" || password === "") {
    res.render("auth/signup", {
      errorMessage: "Indique um nome de usuário e uma senha para se inscrever"
    });
    return;
  }

  User.findOne({ email })
    .then(user => {
      if (user !== null) {
        res.render("auth/signup", {
          errorMessage: "O email de usuário já existe!"
        });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      User.create({
        name,
        email,
        phone,
        birthDate,
        password: hashPass
      })
        .then(() => {
          res.redirect("/");
        })
        .catch(error => {
          console.log(error);
        });
    })
    .catch(error => {
      next(error);
    });
};

module.exports = signupPost;
