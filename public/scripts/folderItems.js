const folderItems = document.querySelectorAll(".folder-item");

folderItems.forEach((folder) => {
  folder.addEventListener("dblclick", (e) => {
    const folderId = folder.dataset.id;
    window.location.href = `/drive/folders/${folderId}`;
  });
});

const renameDialog = document.querySelector("#rename-folder-dialog");
const renameButtons = document.querySelectorAll(".folder-rename-btn");
renameButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const inputName = renameDialog.querySelector("input[name='name']");
    const folderId = renameDialog.querySelector("input[name='id']");

    inputName.value = btn.dataset.name;
    folderId.value = btn.dataset.id;
    renameDialog.showModal();
  });
});
