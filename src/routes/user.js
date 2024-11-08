const express = require('express');

const router = express.Router();

const userController = require('../controller/user');
const authController = require('../controller/auth');
const { validateToken } = require('../middlewares/validateToken');

router.post('/login', authController.login);
router.get('/:id', validateToken, userController.getById);
router.put('/:id', validateToken, userController.update);
router.delete('/:id', validateToken, userController.delete);
router.get('/', validateToken, userController.getAll);
router.post('/', userController.create);

module.exports = router;