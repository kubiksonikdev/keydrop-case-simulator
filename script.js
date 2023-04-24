
JavaScript:

```javascript
// Code for opening/closing cases
const cases = document.querySelectorAll(".case");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");

cases.forEach((el) => {
  el.addEventListener("click", () => {
    modalContent.innerHTML = `
      <h2 class="modal-title">${el.dataset.title}</h2>
      <img src="${el.dataset.img}" alt="${el.dataset.title}" class="modal-img">
      <div class="modal-details">
        <p class="modal-price">${el.dataset.price}</p>
        <button class="modal-buy cta">Buy Now</button>
      </div>
    `;
    modal.classList.add("modal-active");
  });
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal-active");
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.classList.remove("modal-active");
  }
});
