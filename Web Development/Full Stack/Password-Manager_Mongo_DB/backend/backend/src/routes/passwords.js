import express from 'express';
import { createPassword, getPasswords, deletePassword } from '../controllers/passwordController.js';

const router = express.Router();

// Route to create a new password
router.post('/', createPassword);

// Route to get all passwords
router.get('/', getPasswords);

// Route to delete a password by ID
router.delete('/:id', deletePassword);

export default router;