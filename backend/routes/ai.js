import express from "express";

import { weeklyReport, suggestHabits, recoverPlan, chatAnalysis, morningMotivation } from "../controllers/aiController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.use(protect);

router.post("/weekly-report", weeklyReport);
router.post("/suggest-habits", suggestHabits);
router.post("/recovery-plan", recoverPlan);
router.post("/chat", chatAnalysis);
router.get("/morning", morningMotivation);

export default router;
