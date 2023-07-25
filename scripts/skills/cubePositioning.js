const skillsSection = document.querySelector("#skills");
const buttons = document.querySelectorAll(".button-ab");

console.log("hello from the cubes side");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const cubes = skillsSection.querySelectorAll(".cube-test");
    cubes.forEach((cube) => {
      cube.style.left = "0px";
      cube.style.top = "0px";
    });
  });
});
