const modalOverlay = document.querySelector(".modal_overlay");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", function() {
    const imgId = card.getAttribute("id");
    modalOverlay.classList.add("active");
    modalOverlay.querySelector(
      "iframe"
    ).src = `https://rocketseat.com.br/${imgId}`;
  });
}
document.querySelector(".close-modal").addEventListener("click", function() {
  modalOverlay.classList.remove("active");
});
