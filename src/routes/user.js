const express = require('express');

const router = express.Router();

const ticketController = require('../controller/user');

router.get('/', ticketController.getAll);
router.post('/', ticketController.create);
router.get('/:id', ticketController.getByID);
router.put('/:id', ticketController.update);
router.delete('/:id', ticketController.delete);

module.exports = router;