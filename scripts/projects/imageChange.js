import projectsArray from "./projectsArray.js";
console.log(projectsArray);

const projectsPreview = document.querySelector(".projects__project-preview");
const projectLinks = document.querySelectorAll(
  ".projects_subsection-left-listobject a"
);
const previewAnchor = document.querySelector(".projects__project-preview a");
// array of objects containing project data

let videoElement = null;
let projectsImage = projectsPreview.querySelector("img");

projectLinks.forEach((projectLink) => {
  projectLink.addEventListener("click", (e) => {
    // Remove any existing video element if present
    if (videoElement) {
      videoElement.remove();
      videoElement = null;
    }

    projectsPreview.style.backgroundImage = "none";
    const dataProject = e.currentTarget.dataset.project;

    if (!projectsImage) {
      // if img does not exist, create it
      projectsImage = document.createElement("img");
      previewAnchor.appendChild(projectsImage);
    }

    projectsImage.setAttribute(
      "src",
      `./assets/images/projects/testimages/${dataProject}.jpg`
    );
    projectsImage.setAttribute("alt", `Image of Project ${dataProject}`);
  });
});

projectsPreview.addEventListener("mouseenter", (e) => {
  // add video element if it doesn't exist
  projectsArray.forEach((project) => {
    if (projectsImage.alt === `Image of Project ${project.alt}`) {
      if (!videoElement) {
        videoElement = document.createElement("video");
        videoElement.className = "project-video";
        videoElement.src = `./assets/images/projects/testvideos/${project.alt}.mp4`;
        videoElement.alt = `Video of Project ${project.alt}`;
        videoElement.autoplay = true;
        videoElement.loop = true;
        previewAnchor.appendChild(videoElement);
        setTimeout(() => {
          videoElement.style.opacity = 1;
        }, 1000);
      }
    }
  });
});

projectsPreview.addEventListener("mouseleave", (e) => {
  if (videoElement) {
    videoElement.remove();
    videoElement = null;
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        // Remove any existing video element if present
        if (videoElement) {
          videoElement.remove();
          videoElement = null;
        }
        if (projectsImage) {
          projectsImage.remove();
          projectsImage = null;
        }
      }
    });
  },
  { threshold: 0.2 }
);

observer.observe(projectsPreview);
