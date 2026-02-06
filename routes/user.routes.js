import express from 'express'
import { getUsers, getUserById, searchUsers, createUser } from '../controllers/user.controller.js';  

const router = express.Router();

router.get('/', getUsers );
router.get('/search', searchUsers );
router.get('/:id', getUserById);
router.post('/', createUser);

export default router;