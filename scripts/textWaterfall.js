const sections = document.querySelectorAll(
  ".about-section, .project-section, .skills-section, .contact-section "
);
const coverBlock = document.querySelector(".cover-block");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Check if the entry is intersecting
      let delay = 80;
      const allElements = entry.target.querySelectorAll(
        "h2, h3, p, span, div, a, img, button, svg"
      );

      if (entry.isIntersecting) {
        allElements.forEach((element, index) => {
          element.style.opacity = "0";
          element.style.transform = "translateY(20%)";
          setTimeout(() => {
            element.style.opacity = "1";
            element.style.transition =
              "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";
            element.style.transform = "translateY(0)";
          }, delay * (index + 1) + 250); // Apply the delay based on the index
        });
      } else {
        allElements.forEach((element) => {
          element.style.opacity = "0";
        });
      }
    });
  },
  { threshold: 0.2 }
);

// Start observing all sections
sections.forEach((section) => observer.observe(section));

window.addEventListener("load", () => {
  setTimeout(() => {
    coverBlock.classList.add("cover-block--hidden");
  }, 1000);
});
