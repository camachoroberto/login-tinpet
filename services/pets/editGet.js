const Pet = require("./../../models/Pet");

const editGet = async (req, res) => {
  const pet = await Pet.findById(req.params.petID);
  res.render("pet/edit", pet);
};

module.exports = editGet;
