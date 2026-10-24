
const startButton = document.querySelector("#start-button");
const feedback = document.querySelector("#feedback");

startButton.addEventListener("click", function () {
  feedback.textContent = "Let's move some water!";
});
