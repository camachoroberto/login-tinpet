const logout = (req, res, next) => {
  req.session.currentUser = null;
  req.session.destroy(error => {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/login");
    }
  });
};

module.exports = logout;
