const projectLinks = document.querySelectorAll(
  ".projects_subsection-left-list li a"
);

const projectLinksBefore = document.querySelectorAll(
  ".projects_subsection-left-list li a::before"
);

const linkStateChange = (clickedLink) => {
  projectLinks.forEach((link) => {
    if (link.classList.contains("link-active")) {
      link.classList.remove("link-active");
    }
  });
  clickedLink.classList.add("link-active");
};

projectLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    linkStateChange(event.target);
  });
});
