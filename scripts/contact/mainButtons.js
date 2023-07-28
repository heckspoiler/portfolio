const contactSectionHide = document.querySelectorAll(
  "footer, .contact-section__main-title, .contact-section__main-section"
);
const buttonForm = document.querySelector(".contact-button");
const form = document.querySelector(".contact-section__contact-form");
const buttonFormClose = document.querySelector(".form_cross");
const buttonChat = document.querySelector(".charlybot-button");
const buttonChatClose = document.querySelector(".chatbot__cross");
const chatbot = document.querySelector(".contact-section__chatbot-container");

buttonForm.addEventListener("click", () => {
  form.classList.add("form-visible");
  contactSectionHide.forEach((element) => {
    element.style.filter = "blur(150px)";
  });
});

buttonFormClose.addEventListener("click", () => {
  form.classList.remove("form-visible");

  contactSectionHide.forEach((element) => {
    element.style.filter = "none";
  });
});

buttonChat.addEventListener("click", () => {
  chatbot.classList.add("form-visible");
  contactSectionHide.forEach((element) => {
    element.style.filter = "blur(150px)";
  });
});

buttonChatClose.addEventListener("click", () => {
  chatbot.classList.remove("form-visible");

  contactSectionHide.forEach((element) => {
    element.style.filter = "none";
  });
});
