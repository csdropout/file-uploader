import { Router } from "express";
import * as fileController from "../controllers/fileController.js";
import multer from "multer";
import {
  requireLogin,
  requireFileAccess,
} from "../middleware/authMiddleware.js";
const upload = multer({ storage: multer.memoryStorage() });
const fileRouter = Router();
fileRouter.use(requireLogin);

fileRouter.post("/", upload.single("file"), fileController.createFile);
fileRouter.get("/:id", requireFileAccess, fileController.getFile);
fileRouter.post("/:id/delete", requireFileAccess, fileController.deleteFile);
fileRouter.post("/update", requireFileAccess, fileController.updateFile);

export default fileRouter;
