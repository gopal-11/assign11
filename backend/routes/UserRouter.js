// backend/routes/ImagesRouter.js

import express from 'express';
import { getUsers } from '../controllers/UserController.js';

const router = express.Router();

// GET method route to fetch images
router.get('/:name', getUsers);

export default router;
