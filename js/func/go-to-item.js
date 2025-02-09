// import shopItemsData from "../board-games-storage.js";
let shopItemsData = JSON.parse(localStorage.getItem("shopItemsData")) ?? [];

const shop = document.querySelector("#shop");
const cart = document.querySelector("#shopping-cart");

const itemPageGeneration = (event) => {
  const value = event.target.classList.value;

  if (
    value === "shop-image" ||
    value === "detailes__name" ||
    value === "cart__name"
  ) {
    const itemId = event.target.closest(".shop__item").id.slice(11);

    const image = document.querySelector(".item-page__img");
    const element = shopItemsData.find((element) => element.id === itemId);
    localStorage.setItem("itemData", JSON.stringify(element));
    window.location.assign("../item-page.html");
  }
};

if (shop !== null) {
  shop.addEventListener("click", (event) => itemPageGeneration(event));
} else if (cart !== null) {
  cart.addEventListener("click", (event) => itemPageGeneration(event));
}

document.addEventListener("DOMContentLoaded", () => {
  const element = JSON.parse(localStorage.getItem("itemData"));
});
