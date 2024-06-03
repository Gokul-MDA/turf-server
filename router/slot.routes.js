import express from "express";
import { bookSlot, getSlots } from "../service/slotService.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/slots", getSlots);
router.post("/slots", verifyToken, bookSlot);

export default router;
