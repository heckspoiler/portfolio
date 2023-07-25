const skillsSection = document.querySelector("#skills");
const buttons = document.querySelectorAll(".button-ab");

const cubeArrayAssigned = [
  {
    name: "illustrator",
    cubes: 5,
  },
  {
    name: "photoshop",
    cubes: 4,
  },
  {
    name: "indesign",
    cubes: 4,
  },
  {
    name: "figma",
    cubes: 5,
  },
  {
    name: "html",
    cubes: 7,
  },
  {
    name: "css",
    cubes: 6,
  },
  {
    name: "tailwind",
    cubes: 5,
  },
  {
    name: "javascript",
    cubes: 6,
  },
  {
    name: "react",
    cubes: 5,
  },
];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const cubes = skillsSection.querySelectorAll(".cube-test");
    cubes.forEach((cube, index) => {
      let topCorrection = 0;
      console.log(cubes.length);
      let topPosition = "90%";
      cube.style.transform = "translate(0, 0)";
      cube.style.transition =
        "opacity 0.7s cubic-bezier(0.23, 1, 0.320, 1), left 2s cubic-bezier(0.445, 0.05, 0.55, 0.95), top 2s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 2s cubic-bezier(0.445, 0.05, 0.55, 0.95)";
      cube.style.width = "100%";
      cube.style.height = "10%";
      cube.style.left = 0;
      cube.style.top = topPosition;
      cube.style.marginTop = 0;
    });
  });
});
