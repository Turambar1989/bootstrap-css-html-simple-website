const input = document.getElementById("password");
const messageContainer = document.querySelector(".messageContainer");
const passwords = ["user1234", "spring", "summer", "autumn", "winter"];
const messages = [
  "You got it!",
  "Good Spring Password",
  "Good Summer Password",
  "Good Autumn Password",
  "Good Winter Password",
];
const wrongMessage =
  "Hint for passwords: user1234, spring, summer, autumn, winter";
input.addEventListener("input", function (e) {
  //   console.log(e.target.value);
  messageContainer.textContent = wrongMessage;
  const text = e.target.value;
  // console.log(text);
  passwords.forEach((password, index) => {
    if (password === text) {
      messageContainer.textContent = messages[index];
    }
  });
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
