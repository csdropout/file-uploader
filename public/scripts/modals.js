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
