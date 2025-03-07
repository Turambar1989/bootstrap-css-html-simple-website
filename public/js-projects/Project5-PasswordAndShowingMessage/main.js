const input = document.getElementById("password");
const messageContainer = document.querySelector(".messageContainer");
const password = "user1234";
const message = "You got it!";
const wrongMessage = `Hint for password: 
user1234`;
input.addEventListener("input", function (e) {
  //   console.log(e.target.value);
  if (password === e.target.value) {
    messageContainer.textContent = message;
  } else {
    messageContainer.textContent = wrongMessage;
  }
});
input.addEventListener("focus", function () {
  input.classList.add("passwordInput");
});
// input.addEventListener("focus", function (e) {
//     e.target.classList.add("passwordInput");
//   });
input.addEventListener("blur", function (e) {
  e.target.classList.remove("passwordInput");
});
