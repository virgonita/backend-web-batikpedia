const express = require('express');
const router = express.Router();
const wisataJateng = require('../data/wisataJateng');

router.get('/api/wisataJateng', (req, res) => {
  res.json(wisataJateng);
});

module.exports = router;
