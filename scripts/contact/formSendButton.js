const form = document.querySelector(".contact-section__contact-form");
const formName = document.querySelector("#form_name");
const formEmail = document.querySelector("#form_email");
const formSelect = document.querySelector("#form_select");
const formMessage = document.querySelector("#form_message");
const formCheckbox = document.querySelector("#checkbox");
const formSendButton = document.querySelector("#form_send-button");
const buttonForm = document.querySelector(".contact-button");
const timeout = 2000;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formObject = {
    name: formName.value,
    email: formEmail.value,
    select: formSelect.value,
    message: formMessage.value,
    checkbox: formCheckbox.checked,
  };

  fetch("http://127.0.0.1:3000/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formObject),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

formSendButton.addEventListener("click", () => {
  form.classList.remove("form-visible");
  buttonForm.innerHTML = "<h3>licking the stamp...</h3>";
  buttonForm.classList.remove("button-resize");
  setTimeout(() => {
    buttonForm.innerHTML = "drop me a line!";
  }, timeout);
});
