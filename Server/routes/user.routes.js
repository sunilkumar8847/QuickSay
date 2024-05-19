import express from "express";
import protectRout from "../middleware/protectRout.js";
import getUserSidebar from "../controllers/user.controller.js"

const router = express.Router();

router.get("/", protectRout, getUserSidebar);

export default router;