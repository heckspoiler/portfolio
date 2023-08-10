const textSpan = document.querySelector(".description-outlines");
const svgLaptop = document.querySelector(".hover-svg-laptop");
const nameContainer = document.querySelector(".about-h2-carlo-container");
const carloImg = document.querySelector(".carlo-img");

// adding event listeners to text span --> make svg laptop active

textSpan.addEventListener("mouseover", () => {
  svgLaptop.classList.add("hover-svg-laptop--active");
});

textSpan.addEventListener("mouseout", () => {
  svgLaptop.classList.remove("hover-svg-laptop--active");
});

nameContainer.addEventListener("mouseover", () => {
  carloImg.classList.add("carlo-img--active");
});

nameContainer.addEventListener("mouseout", () => {
  carloImg.classList.remove("carlo-img--active");
});
