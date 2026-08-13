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
