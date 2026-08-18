import { Router } from "express";
import { redirectIfAuthenticated } from "../middleware/authMiddleware.js";
import * as indexController from "../controllers/indexController.js";
const indexRouter = Router();

indexRouter.get("/", redirectIfAuthenticated, indexController.getIndex);

export default indexRouter;
