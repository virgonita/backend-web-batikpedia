const express = require('express');
const router = express.Router();
const gameBatik = require('../data/gameBatik');

router.get('/gameBatik', (req, res) => {
  res.json(gameBatik);
});

module.exports = router;
