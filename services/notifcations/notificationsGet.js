const Match = require('../../models/Match');
const Pet = require('../../models/Pet');

const notifications = async (req, res) => {
  const promisses = [];
  const ownerId = req.session.currentUser._id;
  const pets = await Pet.find({ owner: { $eq: ownerId } });
  for (let i = 0; i < pets.length; i += 1) {
    promisses[i] = Match.find({ petEvaluated: pets[i]._id })
      .populate('petEvaluating')
      .populate('petEvaluated');
  }

  Promise.all(promisses).then(resp => {
    console.log('dsdasdasdasd', resp);
  });

  // const arrayIdsPets = [];
  // const arrayObjetPets = [];

  // for (let i = 0; i < pets.length; i++) {
  //   arrayIdsPets[i] = pets[i]._id;
  //   arrayObjetPets[pets[i]._id] = pets[i];
  // }

  // const petSelect = await Match.find({
  //   petEvaluated: { $in: arrayIdsPets }
  // });

  // const arrayPetsDatas = [];
  // const groupPetsDatas = [];

  // for (let i = 0; i < petSelect.length; i++) {
  //   if (arrayIdsPets.indexOf(petSelect[i].petEvaluated)) {
  //     //Dados dos carrochos escolhidos
  //     const matchPet = await Pet.find({
  //       _id: { $eq: petSelect[i].petEvaluated }
  //     });
  //     arrayPetsDatas['petInterest'] = matchPet;

  //     //Dados dos carrochos interessados
  //     const matchOrigem = await Pet.find({
  //       _id: { $eq: petSelect[i].petEvaluating }
  //     });
  //     arrayPetsDatas['petOrigem'] = matchOrigem;

  //     groupPetsDatas.push(arrayPetsDatas);
  //     //arrayPetsDatas.push(arrayPetsDatas);
  //   }
  // }
  // console.log(`estou aqui`, groupPetsDatas[0].petInterest);
  // // groupPetsDatas.forEach(element => {
  // //   console.log(element.petInterested);
  // // });

  // // console.log(matchPets);
  // res.render('notification/notification', { groupPetsDatas });
};

module.exports = notifications;
