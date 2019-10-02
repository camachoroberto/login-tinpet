const express = require('express');
const router = express.Router();

const newGet = require('./../../services/pets/newGet');
const newPost = require('./../../services/pets/newPost');
const read = require('./../../services/pets/read');
const getEdit = require('./../../services/pets/getEdit');
const postEdit = require('./../../services/pets/postEdit');
const getDelete = require('./../../services/pets/getDelete');
const postDelete = require('./../../services/pets/postDelete');

router.get('/new', newGet);
router.post('/new', newPost);
router.get('/', read);
router.get('/edit', getEdit);
router.post('/edit', postEdit);
router.get('/delete', getDelete);
router.post('/delete', postDelete);

module.exports = router;
