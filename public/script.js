
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("clickMeButton");
  const response = document.getElementById("response");

  button.addEventListener("click", () => {
    response.textContent = "Button was clicked!";
  });
});
