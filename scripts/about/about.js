const textSpan = document.querySelector(".description-outlines");
const svgLaptop = document.querySelector(".hover-svg-laptop");

// adding event listeners to text span --> make svg laptop active

textSpan.addEventListener("mouseover", () => {
  svgLaptop.classList.add("hover-svg-laptop--active");
});

textSpan.addEventListener("mouseout", () => {
  svgLaptop.classList.remove("hover-svg-laptop--active");
});
