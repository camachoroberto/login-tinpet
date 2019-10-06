const Pet = require('./../../models/Pet');

const matchGet = async (req, res, next) => {
  const ownerId = req.session.currentUser._id;
  const pets = await Pet.find({ owner: { $ne: ownerId } });
  res.render('match/playMatch', { pets });
};

module.exports = matchGet;
