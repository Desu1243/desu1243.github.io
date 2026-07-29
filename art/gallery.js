const dialog = document.querySelector(".lightbox");
const dialogImage = dialog.querySelector("img");
const dialogTitle = dialog.querySelector("h2");
const dialogDescription = dialog.querySelector(".lightbox-description");
const dialogSource = dialog.querySelector(".lightbox-source");
const dialogArtist = dialog.querySelector(".lightbox-artist");
const closeButton = dialog.querySelector(".close");

document.querySelectorAll(".art-button").forEach((button) => {
  button.addEventListener("click", () => {
    dialogImage.src = button.dataset.full;
    dialogImage.alt = button.dataset.title;
    dialogTitle.textContent = button.dataset.title;

    const description = button.dataset.description;
    dialogDescription.textContent = description || "";
    dialogDescription.hidden = !description;

    const source = button.dataset.source;
    dialogSource.href = source || "";
    dialogSource.textContent = button.dataset.sourceLabel || "View source";
    dialogSource.hidden = !source;

    const artist = button.dataset.artist;
    dialogArtist.href = artist || "";
    dialogArtist.textContent = button.dataset.artistLabel || "View artist";
    dialogArtist.hidden = !artist;

    dialog.showModal();
  });
});

closeButton.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog.open) dialog.close();
});
