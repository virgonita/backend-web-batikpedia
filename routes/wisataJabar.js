const express = require('express');
const router = express.Router();
const wisataJabar = require('../data/wisataJabar');

router.get('/wisataJabar', (req, res) => {
  res.json(wisataJabar);
});

module.exports = router;
