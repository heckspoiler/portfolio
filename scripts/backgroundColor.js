const body = document.querySelector("body");
const sections = document.querySelectorAll(".main-section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Check if the entry is intersecting
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        if (sectionId == "about") {
          body.style.backgroundColor = "#A4FFDE";
        } else if (sectionId == "projects") {
          body.style.backgroundColor = "#FAF126";
        } else if (sectionId == "landing") {
          body.style.backgroundColor = "#8EB4FD";
        } else if (sectionId == "skills") {
          body.style.backgroundColor = "#711EF8";
        } else if (sectionId == "contact") {
          body.style.backgroundColor = "#F46265";
        }
      }
    });
  },

  { threshold: 0.7 }
);

// Start observing all sections
sections.forEach((section) => observer.observe(section));
