import { Router } from "express";
import * as folderController from "../controllers/folderController.js";
import {
  requireLogin,
  requireFolderAccess,
} from "../middleware/authMiddleware.js";
const folderRouter = Router();
folderRouter.use(requireLogin);

folderRouter.get("/", folderController.getFolder);
folderRouter.get(
  "/folders/:id",
  requireFolderAccess,
  folderController.getFolder,
);
folderRouter.post("/folders", folderController.createFolder);
folderRouter.post(
  "/folders/:id/delete",
  requireFolderAccess,
  folderController.deleteFolder,
);
folderRouter.post(
  "/folders/update",
  requireFolderAccess,
  folderController.updateFolder,
);

export default folderRouter;
