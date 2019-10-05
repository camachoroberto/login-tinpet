const User = require('./../../models/User');

const userEditPost = async (req, res) => {
  const { name, email, password, phone, birthDate } = req.body;
  await User.updateOne(
    { _id: req.query.petID },
    { $set: { name, email, password, phone, birthDate } },
    (err, result) => {
      if (err) return console.log(err);
      res.redirect('/my-account');
    }
  );
};

module.exports = userEditPost;
