const navItemRef = document.querySelectorAll(".item");

console.log("Number of catogories: ", navItemRef.length);

const itemRef = [...navItemRef].map((item) => {
  const titleRef = item.querySelector("h2");
  const subNavItemRef = item.querySelectorAll("li");

  console.log("Category: ", titleRef.textContent);
  console.log("Elements: ", subNavItemRef.length);
});
