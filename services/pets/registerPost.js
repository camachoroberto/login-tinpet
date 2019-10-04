const Pet = require("./../../models/Pet");

const registerPost = (req, res) => {
  const { name, birth, breed, gender, pedigree } = req.body;
  const imageUrl = req.file.url;
  const owner = req.session.currentUser._id;
  const newPet = new Pet({
    owner,
    name,
    birth,
    breed,
    gender,
    pedigree,
    imageUrl
  });
  newPet
    .save()
    .then(() => {
      res.redirect("/my-account");
    })
    .catch(err => {
      throw new Error(err);
    });
};

module.exports = registerPost;
