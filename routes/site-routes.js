const express = require("express");
const Pet = require("./../models/Pet");

const uploadCloud = require("./../config/cloudinary.config.js");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("home");
});

router.use((req, res, next) => {
  if (req.session.currentUser) {
    // <== if there's user in the session (user is logged in)
    next(); // ==> go to the next route ---
  } else {
    //    |
    res.redirect("/login"); //    |
  } //    |
}); // ------------------------------------
//     |
//     V
router.get("/secret", (req, res, next) => {
  res.render("secret");
});

router.get("/register", (req, res, next) => {
  res.render("pet/register");
});

router.post("/register", uploadCloud.single("imageUrl"), (req, res) => {
  const { name, birth, breed, gender, pedigree } = req.body;
  const imageUrl = req.file.url;
  console.log(imageUrl);

  const newPet = new Pet({ name, birth, breed, gender, pedigree, imageUrl });
  newPet
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      throw new Error(err);
    });
});
module.exports = router;
