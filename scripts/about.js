const textSpan = document.querySelector(".description-outlines");
const svgLaptop = document.querySelector(".hover-svg-laptop");
const designText = document.querySelector(".about-small-text-emphasize");
const coverBlock = document.querySelector(".cover-block");

// adding event listeners to text span --> make svg laptop active

textSpan.addEventListener("mouseover", () => {
  svgLaptop.classList.add("hover-svg-laptop--active");
});

textSpan.addEventListener("mouseout", () => {
  svgLaptop.classList.remove("hover-svg-laptop--active");
});

designText.addEventListener("mouseover", () => {
  coverBlock.style.marginLeft = "200vw";
  coverBlock.style.marginTop = "200vh";
});
