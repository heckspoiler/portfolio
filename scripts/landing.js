const paragraphContainer = document.querySelectorAll(
  ".landing-section-para-container"
);

// random color changes on hover for paragraph container

const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];

const randomColor = () => {
  return colorArray[Math.floor(Math.random() * colorArray.length)];
};

const changeColor = (container) => {
  const color = randomColor();
  container.style.backgroundColor = color;
};

paragraphContainer.forEach((container) => {
  container.addEventListener("mouseenter", () => {
    changeColor(container);
  });

  container.addEventListener("mouseleave", () => {
    container.style.backgroundColor = "transparent";
  });
});

// display image on hover for paragraph container
