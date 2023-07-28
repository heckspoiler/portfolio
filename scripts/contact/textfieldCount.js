const textfieldCount = document.getElementById("chatbot__numbers");

textfieldCount.innerHTML = "0/200";

const chatInput = document.querySelector(".chatbot__input-field textarea");

chatInput.addEventListener("input", () => {
  textfieldCount.innerHTML = `${chatInput.value.length}/200`;
});
