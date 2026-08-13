import { prisma } from "../lib/prisma.js";
import path from "path";

export async function createFile(req, res, next) {
  try {
    const file = req.file;
    const folderId = req.body.folderId || null;
    console.log(file, folderId);

    const fileUpload = await prisma.file.create({
      data: {
        name: file.originalname,
        size: file.size,
        url: file.path,
        folderId: folderId,
        ownerId: req.user.id,
      },
    });
    if (folderId) {
      res.redirect(`/drive/folders/${folderId}`);
    } else {
      res.redirect("/drive");
    }
  } catch (err) {
    next(err);
  }
}
export async function getFile(req, res, next) {
  try {
    const fileId = req.params.id;
    const file = await prisma.file.findUnique({
      where: { id: fileId, ownerId: req.user.id },
    });

    const filePath = path.resolve(file.url);
    console.log(filePath);
    res.download(filePath, file.name, (err) => {
      if (err) {
        throw err;
      }
    });
  } catch (err) {
    next(err);
  }
}
export async function deleteFile(req, res, next) {
  try {
    const fileId = req.params.id;
    const file = await prisma.file.delete({
      where: { id: fileId, ownerId: req.user.id },
    });
    // delete from cloud storage
    res.redirect(req.get("referer"));
  } catch (err) {
    next(err);
  }
}

export async function updateFile(req, res, next) {
  try {
    const file = await prisma.file.delete({
      data: { name: req.body.name },
      where: { id: req.body.id, ownerId: req.user.id },
    });
    res.redirect(req.get("referer"));
  } catch (err) {
    next(err);
  }
}
