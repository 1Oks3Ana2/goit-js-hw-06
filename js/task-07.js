const inputFontSizeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

textRef.style.fontSize = inputFontSizeRef.value + "px";

inputFontSizeRef.addEventListener(
  "input",
  (event) => (textRef.style.fontSize = inputFontSizeRef.value + "px")
);
