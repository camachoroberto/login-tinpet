// const express = require("express");
// const Pet = require("./../models/Pet");

// const uploadCloud = require("./../config/cloudinary.config.js");

// const router = express.Router();

// router.get("/", (req, res, next) => {
//   res.render("home");
// });

// router.use((req, res, next) => {
//   if (req.session.currentUser) {
//     // <== if there's user in the session (user is logged in)
//     next(); // ==> go to the next route ---
//   } else {
//     //    |
//     res.redirect("/login"); //    |
//   } //    |
// }); // ------------------------------------
// //     |
// //     V

// router.get("/my-account", async (req, res, next) => {
//   const ownerId = req.session.currentUser._id;
//   console.log(req.session.currentUser);
//   const pets = await Pet.find({ owner: { $eq: ownerId } });
//   res.render("my-account", { pets });
// });

// router.get("/register", (req, res, next) => {
//   res.render("pet/register");
// });

// router.post("/register", uploadCloud.single("imageUrl"), (req, res) => {
//   const { name, birth, breed, gender, pedigree } = req.body;
//   const imageUrl = req.file.url;
//   const owner = req.session.currentUser._id;
//   const newPet = new Pet({
//     owner,
//     name,
//     birth,
//     breed,
//     gender,
//     pedigree,
//     imageUrl
//   });
//   newPet
//     .save()
//     .then(() => {
//       res.redirect("/my-account");
//     })
//     .catch(err => {
//       throw new Error(err);
//     });
// });

// router.get("/edit/:petID", async (req, res) => {
//   const pet = await Pet.findById(req.params.petID);
//   res.render("pet/edit", pet);
// });

// router.post("/edit", async (req, res) => {
//   const { name, birth, breed, gender, pedigree } = req.body;
//   const imageUrl = req.file.url;
//   await Pet.updateOne(
//     { _id: req.query.petID },
//     { $set: { name, birth, breed, imageUrl, gender, pedigree } },
//     (err, result) => {
//       if (err) return console.log(err);
//       res.redirect("/my-account");
//     }
//   );
// });

// router.get("/delete/:petID", (req, res) => {
//   Pet.deleteOne({ _id: req.params.petID })
//     .then(() => {
//       res.redirect("/my-account");
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// module.exports = router;
