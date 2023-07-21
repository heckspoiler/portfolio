const body = document.querySelector("body");
const sections = document.querySelectorAll(".main-section");
const eyes = document.querySelectorAll(".eyes");
const cursor = document.querySelector(".cursor");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Check if the entry is intersecting and if it is, change background color
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        if (sectionId == "about") {
          body.style.backgroundColor = "#A4FFDE";
          cursor.style.backgroundColor = "#31ABFD";
        } else if (sectionId == "projects") {
          body.style.backgroundColor = "#71FCF4";
          cursor.style.backgroundColor = "#FC1616";
        } else if (sectionId == "landing") {
          body.style.backgroundColor = "#A4FFDE";
        } else if (sectionId == "skills") {
          body.style.backgroundColor = "#711EF8";
          cursor.style.backgroundColor = "#FAF126";
        } else if (sectionId == "contact") {
          body.style.backgroundColor = "#F46265";
          cursor.style.backgroundColor = "#FAF126";
        }
      }
    });
  },

  { threshold: 0.7 }
);

// Start observing all sections
sections.forEach((section) => observer.observe(section));
