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

    res.render("dashboard", {
      folders,
      files,
      folderId,
    });
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

    res.redirect(`/drive/folders/${parentId}`);
  } catch (err) {
    next(err);
  }
}
export async function deleteFolder(req, res, next) {
  try {
    const folderId = req.params.id;
    const userId = req.user.id;

    const deleteFolder = await prisma.folder.delete({
      where: { id: folderId, ownerId: userId },
    });

    res.redirect("/drive");
  } catch (err) {
    next(err);
  }
}

export async function updateFolder(req, res, next) {
  try {
    const updateFolder = await prisma.folder.update({
      data: { name: req.body.name },
      where: { id: req.body.id, ownerId: req.user.id },
    });
    res.redirect(req.get("referer"));
  } catch (err) {
    next(err);
  }
}
