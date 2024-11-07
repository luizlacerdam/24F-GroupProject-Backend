const express = require('express');

const router = express.Router();

const ticketController = require('../controller/ticket');

router.get('/:id', ticketController.getByID);
router.put('/:id', ticketController.update);
router.delete('/:id', ticketController.delete);
router.get('/', ticketController.getAll);
router.post('/', ticketController.create);

module.exports = router;