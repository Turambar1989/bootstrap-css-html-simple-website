const addButton = document.querySelector(".btn");
let number = 1;
addButton.addEventListener("click", function () {
  const CreatedDocument = document.createElement("div");
  CreatedDocument.classList.add("square");
  CreatedDocument.textContent = number;
  document.querySelector(".container").appendChild(CreatedDocument);
  if (number % 5 === 0) {
    CreatedDocument.classList.remove("square");
    CreatedDocument.classList.add("circle");
  }
  number = number + 1;
});
