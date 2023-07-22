const projectLinks = document.querySelectorAll(
  ".projects_subsection-left-list li a"
);

// changing position and color of link and before element

const linkStateChange = (clickedLink) => {
  projectLinks.forEach((link) => {
    if (link.classList.contains("link-active")) {
      link.classList.remove("link-active");
    }
  });
  clickedLink.classList.add("link-active");
  clickedLink.classList.add("watched");
};

projectLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    linkStateChange(event.target);
  });
});
