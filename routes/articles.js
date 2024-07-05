import { Router } from "express";
import { getArticles, getArticlesById } from "../controllers/articlesController.js";

const router = Router();

router.get("/articles", getArticles);
router.get("/articles/:id", getArticlesById);

export default router;  