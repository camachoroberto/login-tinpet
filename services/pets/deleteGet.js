const Pet = require('./../../models/Pet');

const deleteGet = (req, res) => {
  Pet.deleteOne({ _id: req.params.petID })
    .then(() => {
      res.redirect('/my-account');
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = deleteGet;
