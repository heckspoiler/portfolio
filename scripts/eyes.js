const sections = document.querySelectorAll(".main-section");
const eyesColor = document.querySelectorAll(".eyes");

console.log(eyesColor);
// color change of eyes

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        if (sectionId == "about") {
          eyesColor.forEach((eyecolor) => {
            eyecolor.style.backgroundColor = "#A4FFDE";
          });
        } else if (sectionId == "projects") {
          eyesColor.forEach((eyecolor) => {
            eyecolor.style.backgroundColor = "#FAF126";
          });
          console.log("about");
        } else if (sectionId == "skills") {
          eyesColor.forEach((eyecolor) => {
            eyecolor.style.backgroundColor = "#FAF126";
          });
        } else if (sectionId == "contact") {
          eyesColor.forEach((eyecolor) => {
            eyecolor.style.backgroundColor = "#FAF126";
          });
        }
      }
    });
  },

  { threshold: 0.7 }
);

// Start observing all sections
sections.forEach((section) => observer.observe(section));
