const express = require('express');
const router = express.Router();

const matchGet = require('./../../services/match/matchGet');

router.get('/match', matchGet);

module.exports = router;
