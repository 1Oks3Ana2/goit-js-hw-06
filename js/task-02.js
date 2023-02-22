const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const listItemRef = ingredients.map((ingredient) => {
  const elRef = document.createElement("li");
  elRef.textContent = ingredient;
  elRef.classList.add("item");
  return elRef;
});

listRef.append(...listItemRef);
