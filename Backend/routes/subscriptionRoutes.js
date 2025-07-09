import express from 'express';
// n
//import { getUserSubscriptions } from '../controllers/userController.js';

const router = express.Router();

// Route: GET /api/user/subscriptions
router.get('/user/subscriptions',  getUserSubscriptions);

export default router;
