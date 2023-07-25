import projectsArray from "./projectsArray.js";

const projectLinks = document.querySelectorAll(
  ".projects_subsection-left-list li a"
);
const projectsPreview = document.querySelector(".projects__project-preview");
const previewAnchor = document.querySelector(".projects__project-preview a");

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

// changing position and color of link and before element on scroll

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      projectLinks.forEach((link) => {
        if (link.classList.contains("link-active")) {
          link.classList.remove("link-active");
        }
      });
    }
  });
});

projectLinks.forEach((link) => {
  observer.observe(link);
});
