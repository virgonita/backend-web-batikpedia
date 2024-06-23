const express = require('express');
const router = express.Router();
const sejarahBatik = require('../data/sejarah');

router.get('/api/sejarah', (req, res) => {
  res.json(sejarahBatik);
});

module.exports = router;
