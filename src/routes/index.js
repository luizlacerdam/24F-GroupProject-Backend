/**
 * Express module.
 * @const
 * @namespace express
 */

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ title: 'Place Holder' });
});

module.exports = router;