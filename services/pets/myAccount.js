const Pet = require("./../../models/Pet");
const myAccountGet = async (req, res, next) => {
  const ownerId = req.session.currentUser._id;
  console.log(req.session.currentUser);
  const pets = await Pet.find({ owner: { $eq: ownerId } });
  res.render("myAccount", { pets });
};

module.exports = myAccountGet;
