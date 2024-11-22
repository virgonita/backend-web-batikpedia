const express = require('express');
const router = express.Router();
const batikTradisional = require('../data/batikTradisional');

router.get('/batikTradisional', (req, res) => {
  res.json(batikTradisional);
});

module.exports = router;
