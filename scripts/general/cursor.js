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

const growCursor = () => {
  cursor.style.width = "30px";
  cursor.style.height = "30px";
  cursor.style.backgroundColor = "red";
};

const resetCursor = () => {
  cursor.style.width = "15px";
  cursor.style.height = "15px";
  cursor.style.backgroundColor = "blue";
};

const imagesAndLinks = document.querySelectorAll("img, a");

imagesAndLinks.forEach((element) => {
  element.addEventListener("mouseenter", growCursor);
  element.addEventListener("mouseleave", resetCursor);
});

window.addEventListener("mousemove", moveCursor);
