const inputRef = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  nameLabel.textContent = event.currentTarget.value;

  if (event.currentTarget.value.length === 0) {
    nameLabel.textContent = "Anonymous";
  }
});
