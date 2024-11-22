const express = require('express');
const router = express.Router();
const kontenMembatik = require('../data/kontenMembatik');

router.get('/kontenMembatik', (req, res) => {
  res.json(kontenMembatik);
});

module.exports = router;
