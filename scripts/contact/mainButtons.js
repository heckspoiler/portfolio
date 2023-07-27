const contactSectionHide = document.querySelectorAll(
  ".contact-section :not(.contact-section form *)"
);
const buttonForm = document.querySelector(".contact-button");
const form = document.querySelector(".contact-section form");
const buttonFormClose = document.querySelector(".form_cross");

buttonForm.addEventListener("click", () => {
  form.classList.add("form-visible");
  contactSectionHide.forEach((element) => {
    element.classList.add("contact-section-hidden");
  });
});

buttonFormClose.addEventListener("click", () => {
  form.classList.remove("form-visible");

  contactSectionHide.forEach((element) => {
    element.classList.remove("contact-section-hidden");
  });
});
