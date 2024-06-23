const express = require('express');
const router = express.Router();
const classes = require('../data/kelasEdukasi');

router.get('/api/kelasEdukasi', (req, res) => {
  res.json(classes);
});

module.exports = router;
