const logout = (req, res, next) => {
  req.session.destroy(err => {
    // cannot access session here
    res.redirect("/login");
  });
};

module.exports = logout;
