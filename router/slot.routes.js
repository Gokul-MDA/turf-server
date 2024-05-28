import express from "express";
import { bookSlot, getSlots } from "../service/slotService.js";

const router = express.Router();

router.get("/slots", getSlots);
router.post("/slots", bookSlot);

export default router;
