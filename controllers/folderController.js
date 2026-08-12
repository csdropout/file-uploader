import { prisma } from "../lib/prisma.js";

export async function getFolder(req, res, next) {}
export async function createFolder(req, res, next) {
  try {
    const folderName = req.body.name;
    const userId = req.user.id;
    const parentId = req.body.parentId || null;

    const folder = await prisma.folder.create({
      data: {
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
