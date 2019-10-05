const User = require('./../../models/User');

const userEditGet = async (req, res) => {
  const user = await User.findById(req.params.userID);
  res.render('user/edit', user);
};

module.exports = userEditGet;
