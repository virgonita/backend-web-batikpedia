const express = require('express');
const router = express.Router();
const pelestarianBatik = require('../data/pelestarian');

router.get('/pelestarian', (req, res) => {
  res.json(pelestarianBatik);
});

module.exports = router;
