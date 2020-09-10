const express = require('express');
const router = express.Router();

const { getNums } = require('../controllers/nums');

router.route('/api/data-service').get(getNums);

router.get('/ping', (req, res) => {
  res.send('pong');
});
router.use('/', express.static('client'));

module.exports = router;
