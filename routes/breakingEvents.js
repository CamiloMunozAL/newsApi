import { Router } from "express";
import { getBreakingEvents } from "../controllers/breakingEventsController.js";

const router = Router();

router.get("/breaking-events", getBreakingEvents);

export default router;