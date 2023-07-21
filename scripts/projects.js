const projectLinks = document.querySelectorAll(
  ".projects_subsection-left-list li"
);

const linkStateChange = (link) => {
  link.forEach((element) => {});
};
projectLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    colorChange(event.target);
  });
});
