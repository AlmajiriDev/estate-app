import express from "express";
import {
  deleteUser,
  test,
  updateUserById,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.post("/update/:id", verifyToken, updateUserById);
router.post("/delete/:id", verifyToken, deleteUser);

export default router;
