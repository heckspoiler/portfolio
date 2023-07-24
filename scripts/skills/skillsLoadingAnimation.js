const skillsSection = document.querySelector("#skills");
const title = document.querySelector(".skills-section h2");
const gameboy = document.querySelector(".skills-section__gameboy-container");
const skillsPair = document.querySelectorAll(".skills-pair ");
const subtitles = document.querySelectorAll(
  ".skills-container__subcontainer h3"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        title.classList.add("title-loaded");
        setTimeout(() => {
          gameboy.classList.add("gameboy-loaded");
        }, 100);

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
        gameboy.classList.remove("gameboy-loaded");
        skillsPair.forEach((item) => {
          item.classList.remove("skills-pair-loaded");
        });
        subtitles.forEach((subtitle) => {
          subtitle.classList.remove("subtitles-loaded");
        });
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(skillsSection);
