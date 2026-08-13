// -------- Folder dialog -------
const openFolderBtn = document.querySelector("#open-folder-dialog-btn");
const closeFolderBtn = document.querySelector("#close-folder-dialog-btn");
const folderDialog = document.querySelector("#folder-dialog");

openFolderBtn.addEventListener("click", () => {
  folderDialog.showModal();
});

closeFolderBtn.addEventListener("click", () => {
  folderDialog.close();
});

folderDialog.addEventListener("click", (e) => {
  const rect = folderDialog.getBoundingClientRect();
  const isInDialog =
    rect.top <= e.clientY &&
    rect.left <= e.clientX &&
    e.clientX <= rect.right &&
    e.clientY <= rect.bottom;
  if (!isInDialog) {
    folderDialog.close();
  }
});
// -------- Folder dialog -------

// -------- File dialog ----------
const openFileDialogBtn = document.querySelector("#open-file-dialog-btn");
const closeFileDialogBtn = document.querySelector("#close-file-dialog-btn");
const fileDialog = document.querySelector("#upload-file-dialog");

openFileDialogBtn.addEventListener("click", () => {
  fileDialog.showModal();
});

closeFileDialogBtn.addEventListener("click", () => {
  fileDialog.close();
});

fileDialog.addEventListener("click", (e) => {
  const rect = fileDialog.getBoundingClientRect();
  const isInDialog =
    rect.top <= e.clientY &&
    rect.left <= e.clientX &&
    e.clientX <= rect.right &&
    e.clientY <= rect.bottom;
  if (!isInDialog) {
    fileDialog.close();
  }
});
// -------- File dialog ----------

// -------- Rename folder dialog ---------
const renameFolderDialog = document.querySelector("#rename-folder-dialog");
const closeRenameFolderDialogBtn = document.querySelector(
  "#close-rename-folder-dialog-btn",
);
closeRenameFolderDialogBtn.addEventListener("click", () => {
  renameFolderDialog.close();
});

renameFolderDialog.addEventListener("click", (e) => {
  const rect = renameFolderDialog.getBoundingClientRect();
  const isInDialog =
    rect.top <= e.clientY &&
    rect.left <= e.clientX &&
    e.clientX <= rect.right &&
    e.clientY <= rect.bottom;
  if (!isInDialog) {
    renameFolderDialog.close();
  }
});
// -------- Rename folder dialog ---------

// -------- Rename file dialog ---------
const renameFileDialog = document.querySelector("#rename-file-dialog");
const closeRenameFileDialogBtn = document.querySelector(
  "#close-rename-file-dialog-btn",
);

closeRenameFileDialogBtn.addEventListener("click", () => {
  renameFileDialog.close();
});

renameFileDialog.addEventListener("click", (e) => {
  const rect = renameFileDialog.getBoundingClientRect();
  const isInDialog =
    rect.top <= e.clientY &&
    rect.left <= e.clientX &&
    e.clientX <= rect.right &&
    e.clientY <= rect.bottom;
  if (!isInDialog) {
    renameFileDialog.close();
  }
});
// -------- Rename file dialog ---------
