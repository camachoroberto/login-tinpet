// User model
const bcrypt = require('bcrypt');
const User = require('../../models/User');

const loginPost = (req, res, next) => {
  const theEmail = req.body.email;
  const thePassword = req.body.password;

  if (theEmail === '' || thePassword === '') {
    res.render('auth/login', {
      errorMessage: 'Digite nome de usuário e senha para se inscrever.'
    });
    return;
  }

  User.findOne({ email: theEmail })
    .then(user => {
      if (!user) {
        res.render('auth/login', {
          errorMessage: 'O nome de usuário não existe.'
        });
        return;
      }
      if (bcrypt.compareSync(thePassword, user.password)) {
        // Save the login in the session!
        req.session.currentUser = user;
        res.redirect('/my-account');
      } else {
        res.render('auth/login', {
          errorMessage: 'Senha incorreta'
        });
      }
    })
    .catch(error => {
      next(error);
    });
};

module.exports = loginPost;
