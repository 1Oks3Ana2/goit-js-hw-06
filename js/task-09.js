function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector("body");
const btnRef = document.querySelector(".change-color");
const colorValueRef = document.querySelector(".color");

btnRef.addEventListener("click", (e) => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorValueRef.textContent = getRandomHexColor();
});
