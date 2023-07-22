const projectsPreview = document.querySelector(".projects__project-preview");
const projectLinks = document.querySelectorAll(
  ".projects_subsection-left-listobject a"
);
projectLinks.forEach((link) =>
  console.log("console.loggin left and right: ", link.parentNode)
);
projectLinks.forEach((projectLink) => {
  projectLink.addEventListener("click", (e) => {
    projectsPreview.style.backgroundImage = "none";
    const dataProject = e.currentTarget.dataset.project;

    projectsPreview.innerHTML = `<img src='./assets/images/projects/testimages/${dataProject}.jpeg' alt='Image of Project ${dataProject}' />`;
  });
});
