import { Router } from "express";
import * as folderController from "../controllers/folderController.js";
const folderRouter = Router();

folderRouter.get("/", folderController.getFolder);
folderRouter.get("/folders/:id", folderController.getFolder);
folderRouter.post("/folders", folderController.createFolder);
folderRouter.post("/folders/:id/delete", folderController.deleteFolder);

export default folderRouter;
