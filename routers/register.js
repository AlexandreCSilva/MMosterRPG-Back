import express from 'express';
import { signUp } from '../controllers/register.js';
import { validateRegister } from '../middlewares/registerValidation.js';

const router = express.Router();

router.post('/sign-up', validateRegister, signUp);

export default router;