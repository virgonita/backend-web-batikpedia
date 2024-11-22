const express = require('express');
const router = express.Router();
const beritaData = require('../data/berita');

router.get('/berita', (req, res) => {
  res.json(beritaData);
});

module.exports = router;
