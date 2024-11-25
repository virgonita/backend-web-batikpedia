const express = require('express');
const router = express.Router();
const motifsData = require('../data/motifs');

router.get('/motifs', (req, res) => {
  res.json(motifsData);
});

module.exports = router;
