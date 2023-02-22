const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onValidationBlur);

function onValidationBlur(event) {
  const numberOfAllowedSymbols = Number(event.currentTarget.dataset.length);

  if (event.currentTarget.value.length !== numberOfAllowedSymbols) {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  } else {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  }
}
