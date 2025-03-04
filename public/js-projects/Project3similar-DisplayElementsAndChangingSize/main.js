let size = 10;
let orderElement = 1;
const divContainer = document.querySelector("div");
const ulCreate = document.createElement("ul");

const init = () => {
  const btn = document.createElement("button");
  const btnReset = document.createElement("button");
  btn.textContent = "ClickMe";
  btn.style.marginBottom = 10 + "px";
  btn.classList.add("button");
  btnReset.textContent = "Reset";
  btnReset.classList.add("button");
  divContainer.appendChild(btn);
  divContainer.appendChild(btnReset);
  ulCreate.style.textAlign = "center";
  ulCreate.style.marginTop = 15 + "px";
  ulCreate.style.listStyle = "none";
  ulCreate.style.display = "inline";
  divContainer.appendChild(ulCreate);
  btn.addEventListener("click", createLiElements);
  btnReset.addEventListener("click", resetList);
};
const createLiElements = () => {
  for (let i = 0; i < 10; i++) {
    const liCreate = document.createElement("li");
    liCreate.textContent = `Element ${orderElement}`;
    orderElement++;
    liCreate.style.fontSize = size + "px";
    liCreate.style.display = "block";
    size++;
    liCreate.style.color = "#2c3930";
    ulCreate.appendChild(liCreate);
    console.log(liCreate);
  }
};
const resetList = () => {
  ulCreate.innerHTML = "";
  size = 10;
  orderElement = 1;
};

init();
