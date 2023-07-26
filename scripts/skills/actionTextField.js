const skillsSection = document.querySelector("#skills-section");

const actionTextField = document.querySelector(
  ".skills-section__click-me-field"
);

const fieldParagraph = document.querySelector(
  ".skills-section__click-me-field p"
);

const buttons = document.querySelectorAll(".button-ab");

const sectionTextFieldAutomation = () => {
  actionTextField.style.opacity = 1;
  setTimeout(() => {
    fieldParagraph.innerHTML = "I think this could be solved...";
  }, 3000);

  setTimeout(() => {
    fieldParagraph.innerHTML = "By clicking A or B on the gameboy!";
  }, 5500);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      sectionTextFieldAutomation();
    }
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    fieldParagraph.innerHTML = "Thanks for playing!";

    setTimeout(() => {
      actionTextField.classList.remove("click-me-field__visible");
    }, 1500);
  });
});

observer.observe(skillsSection);
