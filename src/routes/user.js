import express from 'express';
import * as userController from '../controller/user.js';

const router = express.Router();

// Define routes using the router
router.get('/', userController.getAll);
router.post('/', userController.create);
router.get('/:id', userController.getByID);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router; // Export the router as default