const decrBtnRef = document.querySelector('button[data-action="decrement"]');
const incrBtnRef = document.querySelector('button[data-action="increment"]');
const countRef = document.querySelector("#value");

let counterValue = 0;

decrBtnRef.addEventListener("click", onDecrementBtnClick);
incrBtnRef.addEventListener("click", onDIncrementBtnClick);

function onDecrementBtnClick(event) {
  counterValue -= 1;
  countRef.textContent = counterValue;
}

function onDIncrementBtnClick(event) {
  counterValue += 1;
  countRef.textContent = counterValue;
}
