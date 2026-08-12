import { prisma } from "../lib/prisma.js";

export async function getFolder(req, res, next) {
  try {
    const folderId = req.params.id || null;
    const userId = req.user.id;

    const folders = await prisma.folder.findMany({
      where: { parentId: folderId, ownerId: userId },
    });
    console.log(folders);
    const files = await prisma.file.findMany({
      where: { ownerId: userId, folderId: folderId },
    });
    console.log(files);
  } catch (err) {
    next(err);
  }
}

export async function createFolder(req, res, next) {
  try {
    const folderName = req.body.name;
    const userId = req.user.id;
    const parentId = req.body.parentId || null;

    const folder = await prisma.folder.create({
      data: {
        ownerId: userId,
        name: folderName,
        parentId: parentId,
      },
    });

    console.log(folder);
    res.send("Success!");
  } catch (err) {
    next(err);
  }
}
export async function deleteFolder(req, res, next) {}
