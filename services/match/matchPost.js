const Match = require('./../../models/Match');

const matchPost = (req, res) => {
  const { evaluation } = req.body;
  const petEvaluating = req.params;
  //const petEvaluated =
  const newMatch = new Match({
    evaluation,
    petEvaluating,
    petEvaluated
  });
  newPet
    .save()
    .then(() => {
      res.redirect('/my-account');
    })
    .catch(err => {
      throw new Error(err);
    });
};

module.exports = matchPost;
