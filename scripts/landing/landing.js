const paragraphContainer = document.querySelectorAll(
  ".landing-section-para-container"
);
const landingSection = document.querySelector(".landing-section");
const header = document.querySelector("header");
const body = document.querySelector("body");
const eyes = document.querySelectorAll(".eyes");
const heart = document.querySelector(".landing-heart");
const clickMe = document.querySelector(".click-me-h2");
const aboutSection = document.querySelector(".about-section");

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

const observer = new IntersectionObserver(
  (entires) => {
    const entry = entires[0];
    if (!entry.isIntersecting) {
      header.style.display = "flex";
      body.style.overflow = "auto";
      eyes.forEach((eye) => {
        eye.style.visibility = "visible";
      });
    } else {
      header.style.display = "none";
      body.style.overflow = "hidden";
      eyes.forEach((eye) => {
        eye.style.visibility = "hidden";
      });
    }
  },
  { threshold: 0.05 }
);

observer.observe(landingSection);

// heart pop up and button for going down

heart.addEventListener("click", () => {
  landingSection.style.transform = "translateY(-100vh)";
  landingSection.style.transition = "transform 1s cubic-bezier(0.5, 0, 0, 1)";
  aboutSection.style.transform = "translateY(0)";
  aboutSection.style.transition =
    "transform 1s cubic-bezier(0.5, 0, 0, 1) 0.1s";
});

heart.addEventListener("mouseenter", () => {
  clickMe.style.visibility = "visible";
});

heart.addEventListener("mouseleave", () => {
  clickMe.style.visibility = "hidden";
});