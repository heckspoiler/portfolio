import projectsArray from "./projectsArray.js";
const projectsPreview = document.querySelector(".projects__project-preview");
const projectLinks = document.querySelectorAll(
  ".projects_subsection-left-listobject a"
);
const descriptionTitle = document.querySelector(
  ".projects__project-footnotes h3"
);
const descriptionTechnologies = document.querySelector(
  ".projects__technologies"
);

// add description to project preview by clicking the link from projectsArray

projectLinks.forEach((projectLink) => {
  projectLink.addEventListener("click", (e) => {
    const dataProject = e.currentTarget.dataset.project;
    projectsArray.forEach((project) => {
      if (dataProject === project.alt) {
        descriptionTitle.textContent = project.description;
        descriptionTechnologies.innerHTML = project.technologies;
      }
    });
  });
});

// observe projectsPreview to remove description when not visible

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        descriptionTitle.textContent = "";
        descriptionTechnologies.innerHTML = "";
      }
    });
  },
  { threshold: 0.2 }
);

observer.observe(projectsPreview);
