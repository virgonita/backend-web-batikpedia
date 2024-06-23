const express = require('express');
const router = express.Router();
const beritaData = require('../data/berita');

router.get('/api/berita', (req, res) => {
  res.json(beritaData);
});

module.exports = router;
