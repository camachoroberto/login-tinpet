const Pet = require('./../../models/Pet');

const myAccountGet = async (req, res, next) => {
  const ownerId = req.session.currentUser._id;
  const pets = await Pet.find({ owner: { $eq: ownerId } });

  res.render('myAccount', { pets, ownerId });
};

module.exports = myAccountGet;
