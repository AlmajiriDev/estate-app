import express from "express";
import { test, updateUserById } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test);
router.post("update/:id", updateUserById);

export default router;
