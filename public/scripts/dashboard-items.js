const dashboardItems = document.querySelectorAll(".dashboard-item");
dashboardItems.forEach((item) => {
  item.addEventListener("click", () => {
    dashboardItems.forEach((i) => {
      i.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// File
const fileItems = document.querySelectorAll(".file-item");

fileItems.forEach((file) => {
  file.addEventListener("dblclick", () => {
    const id = file.dataset.id;
    window.location.href = `/drive/files/${id}`;
  });
});

// const renameFileDialog = document.querySelector("#rename-file-dialog");
const renameFileButtons = document.querySelectorAll(".file-rename-btn");
renameFileButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const inputName = renameFileDialog.querySelector("input[name='name']");
    const folderId = renameFileDialog.querySelector("input[name='id']");

    inputName.value = btn.dataset.name;
    folderId.value = btn.dataset.id;
    renameFileDialog.showModal();
  });
});

// Folder
const folderItems = document.querySelectorAll(".folder-item");

folderItems.forEach((folder) => {
  folder.addEventListener("dblclick", (e) => {
    const folderId = folder.dataset.id;
    window.location.href = `/drive/folders/${folderId}`;
  });
});

// const renameFolderDialog = document.querySelector("#rename-folder-dialog");
const renameButtons = document.querySelectorAll(".folder-rename-btn");
renameButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const inputName = renameFolderDialog.querySelector("input[name='name']");
    const folderId = renameFolderDialog.querySelector("input[name='id']");

    inputName.value = btn.dataset.name;
    folderId.value = btn.dataset.id;
    renameFolderDialog.showModal();
  });
});
