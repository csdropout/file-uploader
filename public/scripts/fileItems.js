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
