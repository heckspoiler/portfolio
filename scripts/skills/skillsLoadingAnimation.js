const skillsSection = document.querySelector("#skills");
const title = document.querySelector(".skills-section h2");
const skillsPair = document.querySelectorAll(".skills-pair ");
const subtitles = document.querySelectorAll(
  ".skills-container__subcontainer h3"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        title.classList.add("title-loaded");
        const timeout = 100;
        setTimeout(() => {
          skillsPair.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("skills-pair-loaded");
            }, timeout * (index + 1));
          });
        }, 200);
        setTimeout(() => {
          subtitles.forEach((subtitle) => {
            subtitle.classList.add("subtitles-loaded");
          });
        }, 1200);
      } else {
        title.classList.remove("title-loaded");
        skillsPair.forEach((item) => {
          item.classList.remove("skills-pair-loaded");
        });
        subtitles.forEach((subtitle) => {
          subtitle.classList.remove("subtitles-loaded");
        });
      }
    });
  },
  { threshold: 0.8 }
);

observer.observe(skillsSection);
