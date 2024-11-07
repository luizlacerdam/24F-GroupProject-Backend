import express from 'express';
import * as userController from '../controller/ticket.js';

/**
 * Router instance for handling ticket-related routes.
 * @type {import('express').Router}
 */
const router = express.Router(); // Use ES module import

// Define routes using the router
router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.remove); // Note: Changed to remove to avoid naming conflict

export default router; // Export the router as default