import { Router } from "express";
import * as authController from "../controllers/authController.js";
import { redirectIfAuthenticated } from "../middleware/authMiddleware.js";
const authRouter = Router();

authRouter.get("/sign-up", redirectIfAuthenticated, authController.getSignUp);
authRouter.post("/sign-up", redirectIfAuthenticated, authController.postSignUp);
authRouter.get("/login", redirectIfAuthenticated, authController.getLogin);
authRouter.post("/login", redirectIfAuthenticated, authController.postLogin);
authRouter.post("/logout", authController.logOut);

export default authRouter;
