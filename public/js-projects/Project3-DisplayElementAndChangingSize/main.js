const clickBtn = document.querySelector(".button");
//const ulList = document.querySelector(".ullist");
const liList = [...document.querySelectorAll("li")];
let fontNumber = 20;

//First Try// on Ul

// const ShowAndSize = function () {
//   ulList.style.display = "block";
//   ulList.style.fontSize = fontNumber + "px";
//   fontNumber++;
// };

// Second Try// on Li// for

const ShowAndSize = function () {
  for (let i = 0; i < liList.length; i++) {
    liList[i].style.display = "block";
    liList[i].style.fontSize = fontNumber + "px";
  }
  fontNumber++;
};

//Third Try// method for Each

// const ShowAndSize = function () {
//   liList.forEach((liItem) => {
//     liItem.style.display = "block";
//     liItem.style.fontSize = fontNumber + "px";
//   });
//   fontNumber++;
// };

clickBtn.addEventListener("click", ShowAndSize);
