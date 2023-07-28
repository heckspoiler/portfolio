const sendButton = document.querySelector(".chatbot__send-button");
const chatContainer = document.querySelector(".chatbot__messages");
const chatInput = document.querySelector(".chatbot__input-field textarea");

chatInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendButton.click();
  }
});

let firstClick = 0;

sendButton.addEventListener("click", () => {
  if (chatInput.value) {
    let textMessage = document.createElement("div");
    textMessage.classList.add("user_message-container");
    textMessage.innerHTML = `<h5>You</h5> <p class="user_message">${chatInput.value}</p>`;
    chatContainer.appendChild(textMessage);
    chatInput.value = "";
    firstClick += 1;
  } else {
    alert("Please, write something.");
  }

  if (firstClick > 0) {
    chatInput.placeholder = "keep on asking...";
  }
  if (firstClick > 4) {
    chatInput.placeholder = "there's a lot more to know about me!";
  }
  if (firstClick > 10) {
    chatInput.placeholder = "you seem interested, that's cool!";
  }
});

{
  /* <div class="user_message-container">
<h5>You</h5>
<p class="user_message"></p>
</div> */
}
