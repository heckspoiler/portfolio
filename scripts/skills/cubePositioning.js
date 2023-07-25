const skillsSection = document.querySelector("#skills"); // Assuming the cubes are added inside the skillsSection.
const buttons = document.querySelectorAll(".button-ab");

console.log("hello from the cubes side");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const cubes = skillsSection.querySelectorAll(".cube-test");
    cubes.forEach((cube) => {
      cube.style.position = "static";
    });
  });
});
