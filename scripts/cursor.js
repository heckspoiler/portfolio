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

window.addEventListener("mousemove", moveCursor);
