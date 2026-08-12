import { Router } from "express";
import * as fileController from "../controllers/fileController.js";
const fileRouter = Router();

fileRouter.post("/", fileController.createFile);
fileRouter.get("/:id", fileController.getFile);
fileRouter.delete("/:id", fileController.deleteFile);

export default fileRouter;
