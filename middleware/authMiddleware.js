import { prisma } from "../lib/prisma.js";

export function requireLogin(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.redirect("/login");
}

export function redirectIfAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/drive");
  }

  return next();
}

export async function requireFolderAccess(req, res, next) {
  const folder = await prisma.folder.findUnique({
    where: { id: req.params.id },
    select: { ownerId: true },
  });

  if (!folder) {
    return res.status(404).send("Folder not found.");
  }

  if (folder.ownerId !== req.user.id) {
    return res.status(403).send("You are not authorized.");
  }

  return next();
}

export async function requireFileAccess(req, res, next) {
  const file = await prisma.file.findUnique({
    where: { id: req.params.id },
    select: { ownerId: req.user.id },
  });

  if (!file) {
    return res.status(404).send("File not found.");
  }

  if (file.ownerId !== req.user.id) {
    return res.status(403).send("You are not authorized.");
  }

  return next();
}
