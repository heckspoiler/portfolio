const cursor = document.querySelector(".cursor");
const heart = document.querySelector(".landing-heart");

heart.addEventListener("mouseenter", () => {
  cursor.classList.add("hovered");
});
heart.addEventListener("mouseleave", () => {
  cursor.classList.remove("hovered");
});

const moveCursor = (e) => {
  const offsetTop = 10;
  const offsetLeft = 10;

  const mouseY = e.clientY - offsetTop;
  const mouseX = e.clientX - offsetLeft;

  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

// FUNCTION HAS STILL TO BE FINISHED!!!!!! ADAPT COLORS TO SECTIONS

const growCursor = () => {
  cursor.style.width = "22px";
  cursor.style.height = "22px";
};

const resetCursor = () => {
  cursor.style.width = "15px";
  cursor.style.height = "15px";
  cursor.style.borderRadius = "50%";
};

const imagesAndLinks = document.querySelectorAll("img, a, button");

imagesAndLinks.forEach((element) => {
  element.addEventListener("mouseenter", growCursor);
  element.addEventListener("mouseleave", resetCursor);
});

const textfieldsAndInputs = document.querySelectorAll("input, textarea");

const changeCursor = () => {
  cursor.style.width = "2px";
  cursor.style.height = "22px";
  cursor.style.borderRadius = "0";
};

textfieldsAndInputs.forEach((element) => {
  element.addEventListener("mouseenter", changeCursor);
  element.addEventListener("mouseleave", resetCursor);
});

window.addEventListener("mousemove", moveCursor);
