const express = require('express');
const axios = require('axios');
const router = express.Router();

const { getNums } = require('../controllers/nums');

var MY_SLACK_WEBHOOK_URL = process.env.WEBHOOK;
var slack = require('slack-notify')(MY_SLACK_WEBHOOK_URL);

router.route('/api/data-service').get(getNums);

router.get('/ping', (req, res) => {
  res.send('pong');
});
router.use('/', express.static('client'));

module.exports = router;
