const input = document.getElementById("password");
const messageContainer = document.querySelector(".messageContainer");
const passwords = ["FiRsT", "SeconD", "THIRD", "F"];
const messages = ["First", "Second", "Third", "f"];

const wrongMessage = `Hint for passwords: 
FiRsT, SeconD, THIRD, F`;

// 1 sposób dodawanie do tablicy

// input.addEventListener("input", function (e) {
//   //   console.log(e.target.value);
//   messageContainer.textContent = wrongMessage;
//   const text = e.target.value;
//   let newPasswords = [];
//   for (let i = 0; i < passwords.length; i++) {
//     newPasswords.push(passwords[i].toLowerCase());
//   }
//   passwords.forEach((password, index) => {
//     if (password === text) {
//       messageContainer.textContent = messages[index];
//     }
//   });
//   newPasswords.forEach((newPass, index) => {
//     if (newPass === text) {
//       messageContainer.textContent = messages[index];
//     }
//   });
// });

// 2 sposób forEach()

input.addEventListener("input", function (e) {
  //   console.log(e.target.value);
  messageContainer.textContent = wrongMessage;
  const text = e.target.value;
  passwords.forEach((password, index) => {
    if (password === text) {
      messageContainer.textContent = messages[index];
    } else if (password.toLowerCase() === text) {
      messageContainer.textContent = messages[index];
    }
  });
});

// 3 sposób map

// input.addEventListener("input", function (e) {
//   messageContainer.textContent = wrongMessage;
//   const text = e.target.value;
//   const newPasswords = passwords.map((password) => {
//     return password.toLowerCase();
//   });
//   for (let i = 0; i < passwords.length; i++) {
//     if (passwords[i] === text) {
//       messageContainer.textContent = messages[i];
//     }
//   }
//   for (let i = 0; i < passwords.length; i++) {
//     if (newPasswords[i] === text) {
//       messageContainer.textContent = messages[i];
//     }
//   }
// });

input.addEventListener("focus", function () {
  input.classList.add("passwordInput");
});
// input.addEventListener("focus", function (e) {
//     e.target.classList.add("passwordInput");
//   });
input.addEventListener("blur", function (e) {
  e.target.classList.remove("passwordInput");
});
