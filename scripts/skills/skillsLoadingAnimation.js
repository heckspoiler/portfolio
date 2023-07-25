const skillsSection = document.querySelector("#skills");
const title = document.querySelector(".skills-section h2");
const gameboy = document.querySelector(".skills-section__gameboy-container");
const skillsPair = document.querySelectorAll(".skills-pair ");
const subtitles = document.querySelectorAll(
  ".skills-container__subcontainer h3"
);

let cubeArray = [];

const doofus = function () {
  const delay = 80;
  setTimeout(() => {
    for (let i = 0; i < 37; i++) {
      let cube = document.createElement("div");
      cubeArray.push(cube);
      cube.className = "cube-test";
      cube.style.left = Math.random() * window.innerWidth + "px";
      cube.style.top = (Math.random() * window.innerHeight) / 1.5 + "px";
      cube.style.opacity = 0;
      cube.style.zIndex = -1;

      let finalPositionX = Math.random * 1000 + "px";
      let finalPositionY = Math.random * 1000 + "px";

      cube.dataset.finalPositionX = finalPositionX;
      cube.dataset.finalPositionY = finalPositionY;

      skillsSection.appendChild(cube);
      const timeout = 20;

      cubeArray.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = 1;
        }, timeout * (index + 1));
      });
      const cubeFall = (target) => {
        return (
          skillsSection.getBoundingClientRect().bottom -
          target.getBoundingClientRect().top
        );
      };

      cubeArray.forEach((cube) => {
        gsap.to(cube, {
          duration: 2,
          y: cubeFall(cube) - 50,
          ease: "bounce",
        });
      });
    }
  }, 2500);
};

doofus();

export const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        title.classList.add("title-loaded");
        setTimeout(() => {
          gameboy.classList.add("gameboy-loaded");
        }, 100);

        const timeout = 100;

        const animateSkillsPair = new Promise((resolve) => {
          setTimeout(() => {
            skillsPair.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("skills-pair-loaded");
              }, timeout * (index + 1));
            });
            resolve();
          }, 200);
        });

        animateSkillsPair.then(() => {
          setTimeout(() => {
            subtitles.forEach((subtitle) => {
              subtitle.classList.add("subtitles-loaded");
            });
          }, 1000);
        });
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
