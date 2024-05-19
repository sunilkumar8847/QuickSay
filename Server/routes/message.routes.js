import express from 'express';
import { sendMessage, getMessge } from '../controllers/message.controller.js'; // Ensure .js extension is included
import protectRout from '../middleware/protectRout.js';

const router = express.Router();

router.post("/send/:id", protectRout, sendMessage);
router.get("/:id", protectRout, getMessge);

export default router;
