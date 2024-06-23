const express = require('express');
const router = express.Router();
const motifsData = require('../data/motifs');

router.get('/', (req, res) => {
  res.json(motifsData);
});

module.exports = router;
