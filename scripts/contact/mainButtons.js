const buttonForm = document.querySelector(".contact-button");
const form = document.querySelector(".contact-section form");
const buttonFormClose = document.querySelector(".form_cross");

buttonForm.addEventListener("click", () => {
  form.classList.add("form-visible");
});

buttonFormClose.addEventListener("click", () => {
  form.classList.remove("form-visible");
});
