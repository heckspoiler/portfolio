let currentIndex = 0;
let isScrolling = false; // scroll lock

const container = document.querySelector(".container");
const sections = document.querySelectorAll(".section");

container.addEventListener("wheel", (event) => {
  event.preventDefault(); // prevent default scroll

  if (isScrolling) return; // if it's already scrolling, return

  isScrolling = true; // set scroll lock

  if (event.deltaY > 0) {
    // Scroll down
    currentIndex = Math.min(currentIndex + 1, sections.length - 1);
  } else {
    // Scroll up
    currentIndex = Math.max(currentIndex - 1, 0);
  }

  sections[currentIndex].scrollIntoView({ behavior: "smooth" });
});
