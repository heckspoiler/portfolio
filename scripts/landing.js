const landingSection = document.querySelectorAll(".landing-section");
const header = document.querySelector("header");
const paragraphContainer = document.querySelectorAll(
  ".landing-section-para-container"
);

// random color changes on hover for paragraph container & display image on hover for paragraph container

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
    const image = container.querySelector(".hidden-image");
    changeColor(container);
    image.style.visibility = "visible";
  });

  container.addEventListener("mouseleave", () => {
    container.style.backgroundColor = "transparent";
    const image = container.querySelector(".hidden-image");
    image.style.visibility = "hidden";
  });
});

// if landing section is in viewport, the header shouldn't be visible

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

const hideHeader = () => {
  if (isInViewport(landingSection[0])) {
    header.style.visibility = "hidden";
  } else {
    header.style.visibility = "visible";
  }
};

window.addEventListener("scroll", hideHeader());
