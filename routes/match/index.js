const express = require('express');
const router = express.Router();

const matchGet = require('./../../services/match/matchGet');
const matchEvaluationGet = require('./../../services/match/matchEvaluationGet');

router.get('/match-evaluation/:petID/:ownerPedID', matchEvaluationGet);

router.get('/match/:matchID', matchGet);

module.exports = router;
