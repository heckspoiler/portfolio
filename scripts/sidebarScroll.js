// Assuming you have sections with id's like "section-1", "section-2" etc.
const sections = document.querySelectorAll(".main-section");
const sectionIndicator = document.querySelectorAll(".list-object");
const currentSection = document.querySelector("#current-section");

console.log(sectionIndicator);

// Use the same observer for all sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Check if the entry is intersecting
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        currentSection.innerHTML = sectionId.toUpperCase();
        if (sectionId == "about") {
          sectionIndicator[0].style.backgroundColor = "#31ABFD";
        } else if (sectionId != "about") {
          sectionIndicator[0].style.backgroundColor = "transparent";
        }
      }
    });
  },
  // Trigger the callback when the section is 50% visible
  { threshold: 0.7 }
);

// Start observing all sections
sections.forEach((section) => observer.observe(section));
