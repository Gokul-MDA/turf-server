import express from "express";
import { bookSlot, getSlots, requestedSlots } from "../service/slotService.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/slots", getSlots);
router.post("/slots", verifyToken, bookSlot);
router.get("/requestedSlots", verifyToken, requestedSlots)

export default router;
