const express = require('express');
const router = express.Router();

const notifications = require('./../../services/notifcations/notificationsGet');

router.get('/notifications', notifications);

module.exports = router;
