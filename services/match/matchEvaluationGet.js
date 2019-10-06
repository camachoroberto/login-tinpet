const Match = require('../../models/Match');

const matchPost = (req, res) => {
  const petEvaluated = req.params.petID;
  const petEvaluating = req.params.ownerPedID;
  const evaluation = 'undecided';
  const newMatch = new Match({
    petEvaluating,
    petEvaluated,
    evaluation
  });
  newMatch
    .save()
    .then(() => {
      res.redirect('/match/' + petEvaluating);
    })
    .catch(err => {
      throw new Error(err);
    });

  // const { evaluation } = req.body;
  // const petEvaluating = req.params;
  // //const petEvaluated =
  // const newMatch = new Match({
  //   evaluation,
  //   petEvaluating,
  //   petEvaluated
  // });
  // newPet
  //   .save()
  //   .then(() => {
  //     res.redirect('/my-account');
  //   })
  //   .catch(err => {
  //     throw new Error(err);
  //   });
};

module.exports = matchPost;
