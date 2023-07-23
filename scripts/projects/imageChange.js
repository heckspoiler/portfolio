const projectsPreview = document.querySelector(".projects__project-preview");
const projectLinks = document.querySelectorAll(
  ".projects_subsection-left-listobject a"
);

const projectsImage = document.querySelector(".projects__project-preview img");

console.log(projectsImage);

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

projectLinks.forEach((projectLink) => {
  projectLink.addEventListener("click", (e) => {
    projectsPreview.style.backgroundImage = "none";
    const dataProject = e.currentTarget.dataset.project;
    projectsImage.setAttribute(
      "src",
      `./assets/images/projects/testimages/${dataProject}.jpg`
    );
    projectsImage.setAttribute("alt", `Image of Project ${dataProject}`);
  });
});

projectsImage.addEventListener("mouseover", (e) => {
  console.log("mousein");

  projectArray.forEach((project) => {
    if (projectsImage.alt === `Image of Project ${project.alt}`) {
      projectsPreview.innerHTML = `<video src='./assets/images/projects/testvideos/${project.alt}.mp4' alt='Video of Project ${project.alt}' autoplay></video>`;
    }
  });
});

projectsArray.addEventListener("mouseout", (e) => {
  console.log("mouseout");
  projectsPreview.innerHTML = "";
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
