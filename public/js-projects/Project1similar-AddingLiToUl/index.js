const btn = document.querySelector(".button");
let number = 1;
function addLi() {
  const newLi = document.createElement("li");
  const unOrderedListElement = document.querySelector(".unOrderedList");
  newLi.textContent = number;
  if (number % 3 === 0) {
    newLi.classList.add("big");
  }
  number = number + 2;
  unOrderedListElement.appendChild(newLi);
}
btn.addEventListener("click", function () {
  addLi();
});
