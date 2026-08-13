const fileItems = document.querySelectorAll(".file-item");

fileItems.forEach((file) => {
  file.addEventListener("dblclick", () => {
    const id = file.dataset.id;
    window.location.href = `/drive/files/${id}`;
  });
});
