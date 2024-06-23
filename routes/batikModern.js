const express = require('express');
const router = express.Router();
const batikModern = require('../data/batikModern');

router.get('/api/batikModern', (req, res) => {
  res.json(batikModern);
});

module.exports = router;
