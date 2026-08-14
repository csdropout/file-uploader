import { prisma } from "../lib/prisma.js";
import path from "path";
import { supabase } from "../lib/supabase.js";

export async function createFile(req, res, next) {
  try {
    const file = req.file;
    const folderId = req.body.folderId || null;
    console.log(file, folderId);

    const uuid = crypto.randomUUID();
    const extension = path.extname(file.originalname);
    const filePath = `${req.user.id}/${uuid}${extension}`;
    const { data } = await supabase.storage
      .from(`${process.env.SUPABASE_BUCKET}`)
      .upload(filePath, file.buffer, {
        contentType: file.mimetype,
        upsert: false,
      });

    const {
      data: { publicUrl },
    } = supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .getPublicUrl(filePath, {
        download: file.originalname,
        upsert: false,
      });

    const fileUpload = await prisma.file.create({
      data: {
        id: uuid,
        name: file.originalname,
        size: file.size,
        url: publicUrl,
        filePath: filePath,
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
    const file = await prisma.file.findUnique({
      where: { id: req.params.id, ownerId: req.user.id },
    });
    res.redirect(file.url);
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

    const { data } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .remove(file.filePath);
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
