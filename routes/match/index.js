const express = require('express');
const router = express.Router();

const matchGet = require('./../../services/match/matchGet');
const matchPost = require('./../../services/match/matchPost');

router.get('/match/:matchID', matchGet);
router.post('/match/:petID', matchPost);

module.exports = router;
