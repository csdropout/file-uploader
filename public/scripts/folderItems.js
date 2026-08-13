const folderItems = document.querySelectorAll(".folder-item");

folderItems.forEach((folder) => {
  folder.addEventListener("dblclick", (e) => {
    const folderId = folder.dataset.id;
    window.location.href = `/drive/folders/${folderId}`;
  });
});
