const Pet = require('./../../models/Pet');

const editGet = async (req, res) => {
  const pet = await Pet.findById(req.params.petID);
  const birth = pet.birth.toString();
  console.log(birth.substring(0, 20));
  res.render('pet/edit', pet);
};

module.exports = editGet;
