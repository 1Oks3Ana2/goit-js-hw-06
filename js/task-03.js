const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listRef = document.querySelector(".gallery");

listRef.style.display = "flex";
listRef.style.justifyContent = "space-around";
listRef.style.margin = "0";
listRef.style.paddingRight = "0";
listRef.style.paddingLeft = "0";
listRef.style.gap = "10px";
listRef.style.listStyleType = "none";

const makeImageMarkup = ({ url, alt }) => {
  return `<li class="gallery__item"><img src="${url}" alt="${alt}" class="gallery__image"/></li>`;
};

const makeImageList = images.map(makeImageMarkup).join("");

listRef.insertAdjacentHTML("beforeend", makeImageList);

const imageRef = document.querySelectorAll(".gallery__image");

const imageRefStyle = [...imageRef].map((item) => {
  item.style.display = "block";
  item.style.width = "450px";
  item.style.height = "294px";
});
