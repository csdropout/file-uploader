import { Router } from "express";
import * as fileController from "../controllers/fileController.js";
import multer from "multer";
const upload = multer({ dest: "public/tmp/uploads" });
const fileRouter = Router();

fileRouter.post("/", upload.single("file"), fileController.createFile);
fileRouter.get("/:id", fileController.getFile);
fileRouter.post("/:id/delete", fileController.deleteFile);

export default fileRouter;
