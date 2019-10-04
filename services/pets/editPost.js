const Pet = require("./../../models/Pet");

const editPost = async (req, res) => {
  const { name, birth, breed, gender, pedigree } = req.body;
  const imageUrl = req.file.url;
  await Pet.updateOne(
    { _id: req.query.petID },
    { $set: { name, birth, breed, imageUrl, gender, pedigree } },
    (err, result) => {
      if (err) return console.log(err);
      res.redirect("/my-account");
    }
  );
};

module.exports = editPost;
