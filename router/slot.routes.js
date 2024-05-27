import express from "express";
import { getSlots } from "../service/slotService.js";

const router = express.Router()

router.get("/slots",getSlots)

export default router