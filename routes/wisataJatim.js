const express = require('express');
const router = express.Router();
const wisataJatim = require('../data/wisataJatim');

router.get('/api/wisataJatim', (req, res) => {
  res.json(wisataJatim);
});

module.exports = router;
