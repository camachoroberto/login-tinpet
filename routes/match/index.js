const express = require('express');
const router = express.Router();

const matchGet = require('./../../services/match/matchGet');

router.get('/match/:matchID', matchGet);

module.exports = router;
