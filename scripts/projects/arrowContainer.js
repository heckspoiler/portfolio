const arrowContainer = document.querySelector(".arrow-container");
const descriptionField = document.querySelector(
  ".projects-section__description-field"
);
const arrow = document.querySelector(".arrow");
const technologies = document.querySelector(".projects__project-footnotes");

arrowContainer.addEventListener("click", () => {
  descriptionField.classList.toggle("description-field-inView");
  arrow.classList.toggle("arrow-rotated");
  technologies.classList.toggle("technologies-hidden");
});
