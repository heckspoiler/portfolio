const projectsPreview = document.querySelector(".projects__project-preview");
const projectLinks = document.querySelectorAll(
  ".projects_subsection-left-listobject a"
);

const projectsImage = document.querySelector(".projects__project-preview img");

//array of objects containing project data
const projectArray = [
  {
    alt: "sinecloud",
    imgUrl: "./assets/images/projects/testimages/sinecloud.jpg",
    videoUrl: "",
    link: "",
  },
  {
    alt: "station",
    imgUrl: "./assets/images/projects/testimages/station.jpg",
    videoUrl: "",
    link: "",
  },
  {
    alt: "shopify",
    imgUrl: "./assets/images/projects/testimages/shopify.jpg",
    videoUrl: "",
    link: "",
  },
  {
    alt: "bookclub",
    imgUrl: "./assets/images/projects/testimages/bookclub.jpg",
    videoUrl: "",
    link: "",
  },
  {
    alt: "milkymood",
    imgUrl: "./assets/images/projects/testimages/milkymood.jpg",
    videoUrl: "",
    link: "",
  },
];

let videoElement = null;

projectLinks.forEach((projectLink) => {
  projectLink.addEventListener("click", (e) => {
    // Remove any existing video element if present
    if (videoElement) {
      videoElement.remove();
      videoElement = null;
    }

    projectsPreview.style.backgroundImage = "none";
    const dataProject = e.currentTarget.dataset.project;
    projectsImage.setAttribute(
      "src",
      `./assets/images/projects/testimages/${dataProject}.jpg`
    );
    projectsImage.setAttribute("alt", `Image of Project ${dataProject}`);
  });
});

projectsPreview.addEventListener("mouseenter", (e) => {
  // add video element if it doesn't exist
  projectArray.forEach((project) => {
    if (projectsImage.alt === `Image of Project ${project.alt}`) {
      if (!videoElement) {
        videoElement = document.createElement("video");
        videoElement.className = "project-video";
        videoElement.src = `./assets/images/projects/testvideos/${project.alt}.mp4`;
        videoElement.alt = `Video of Project ${project.alt}`;
        videoElement.autoplay = true;
        projectsPreview.appendChild(videoElement);
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
        projectsPreview.innerHTML = "";
      }
    });
  },
  { threshold: 0.2 }
);
