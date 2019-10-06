const Pet = require('./../../models/Pet');
const Match = require('./../../models/Match');

const matchGet = async (req, res, next) => {
  const ownerId = req.session.currentUser._id;
  const petSelectId = req.params.matchID;

  const petsEvaluation = await Match.find({
    petEvaluating: petSelectId
  });

  const arrayIdsEvaluation = [];

  for (let i = 0; i < petsEvaluation.length; i++) {
    arrayIdsEvaluation[i] = petsEvaluation[i].petEvaluated;
  }

  const pets = await Pet.find({
    $and: [{ owner: { $ne: ownerId } }, { _id: { $nin: arrayIdsEvaluation } }]
  });

  res.render('match/playMatch', { pets, petSelectId, petsEvaluation });
};

module.exports = matchGet;
