function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesListRef = document.querySelector("#boxes");
const inputRef = document.querySelector('input[type = "number"]');
const createBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");

let boxRef = [];

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    const startSize = 30;
    let size = startSize + i * 10;
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxRef.push(newBox);
  }
  boxesListRef.append(...boxRef);
}

inputRef.addEventListener("input", () => {
  createBtnRef.addEventListener("click", () => {
    const amount = Number(inputRef.value);
    createBoxes(amount);
  });
});

destroyBtnRef.addEventListener("click", () => {
  boxesListRef.innerHTML = "";
});
