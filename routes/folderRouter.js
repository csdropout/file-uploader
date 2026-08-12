import { Router } from "express";
import * as folderController from "../controllers/folderController.js";
const folderRouter = Router();

folderRouter.post("/", folderController.createFolder);
// folderRouter.get("/", folderController.getFolder);
// folderRouter.get("/:id", folderController.getFolder);

export default folderRouter;
