const express = require('express');

const router = express.Router();

const userController = require('../controller/user');

router.get('/:id', userController.getById);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
router.get('/', userController.getAll);
router.post('/', userController.create);

module.exports = router;