const overlayBackground = document.querySelector(".phone-overlay");
const overlayText = document.querySelector(".overlay-title");
const colors = ["#A4FFDE", "#FFEA29", "#A4FFDE", "#711EF8", "#F46265"];
const textColors = ["#711EF8", "black", "#711EF8", "#FFEA29", "#FFEA29"];

const text = overlayText.textContent;
const spans = [];
overlayText.innerHTML = "";

for (let letter of text) {
  const span = document.createElement("span");
  span.textContent = letter;
  span.style.transition =
    "opacity 0.1s ease-in-out, margin-top 0.3s ease-in-out";
  span.style.opacity = 0;
  span.style.marginTop = `-30px`;
  overlayText.appendChild(span);
  spans.push(span);
}

window.addEventListener("load", () => {
  spans.forEach((span, index) => {
    setTimeout(() => {
      span.style.opacity = 1;
      span.style.marginTop = "0px";
    }, index * 50 + 1000);
  });
});

document.addEventListener("scroll", function () {
  let scrolled =
    document.documentElement.scrollTop /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  if (scrolled < 0.2) {
    overlayBackground.style.backgroundColor = colors[0];
    overlayText.style.color = textColors[0];
  } else if (scrolled < 0.4) {
    overlayBackground.style.backgroundColor = colors[1];
    overlayText.style.color = textColors[1];
  } else if (scrolled < 0.6) {
    overlayBackground.style.backgroundColor = colors[2];
    overlayText.style.color = textColors[2];
  } else if (scrolled < 0.8) {
    overlayBackground.style.backgroundColor = colors[3];
    overlayText.style.color = textColors[3];
  } else {
    overlayBackground.style.backgroundColor = colors[4];
    overlayText.style.color = textColors[4];
  }
});
