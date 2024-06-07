import express from "express";
import { approveSlot, bookSlot, getSlots, requestedSlots } from "../service/slotService.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/slots", getSlots);
router.post("/slots", verifyToken, bookSlot);
router.get("/requestedSlots", verifyToken, requestedSlots)
router.post('/approve',approveSlot)

export default router;
