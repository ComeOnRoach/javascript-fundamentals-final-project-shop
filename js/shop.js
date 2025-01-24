import { ShopItem } from "./item.js";

const shop = document.querySelector("#shop");

let shopItemsData = [
  new ShopItem(
    "bg1",
    "img/products/too-many-bones.jpg",
    "Too Many Bones",
    "€ 149.50",
    25
  ),
  new ShopItem(
    "bg2",
    "img/products/slay-the-spire.png",
    "Slay The Spire",
    "€ 120.50",
    40
  ),
  new ShopItem(
    "bg3",
    "img/products/seti.jpg",
    "SETI: Search for Extraterrestrial Intelligence",
    "€ 62.50",
    25
  ),
  new ShopItem("bg4", "img/products/calico.png", "Calico", "€ 36.00", 500),
];

let basket = [];

const generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((item) => {
      // Destructuring
      const { id, image, name, price } = item;
      return `
      <div id="product-id-${id}" class="shop__item">
        <img src="${image}" alt="${name}" />
        <div class="detailes">
          <h3>${name}</h3>
          <div class="price-quantity">
            <h2>${price}</h2>
            <div class="buttons">
              <i class="bi bi-plus-lg"></i>
              <div id="${id}" class="quantity">0</div>
              <i class="bi bi-dash-lg"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join(""));
};

generateShop();

const bigPlusBtn = document.querySelectorAll(".bi-plus-lg");
const bigMinusBtn = document.querySelectorAll(".bi-dash-lg");

let increment = (btn) => {
  const quantityId = btn.nextElementSibling.id;
  let searchedItem = basket.find((item) => item.id === quantityId);
  if (searchedItem === undefined) {
    basket.push({
      id: quantityId,
      item: 1,
    });
  } else {
    searchedItem.item += 1;
  }

  console.log(basket);
  update(quantityId);
};

let decriment = (btn) => {
  const quantityId = btn.previousElementSibling.id;
  let searchedItem = basket.find((item) => item.id === quantityId);
  if (searchedItem !== undefined) {
    if (searchedItem.item > 0) {
      searchedItem.item -= 1;
    } else {
      return;
    }
  }
  console.log(basket);
  update(quantityId);
};

let update = (id) => {
  const searchItemByIdInBasket = basket.find((item) => item.id === id);
  const itemCounterOnScreen = document.querySelector(`#${id}`);
  if (searchItemByIdInBasket !== undefined) {
    itemCounterOnScreen.textContent = searchItemByIdInBasket.item;
  }
  calculation();
};

bigPlusBtn.forEach((btn) =>
  btn.addEventListener("click", () => increment(btn))
);
bigMinusBtn.forEach((btn) =>
  btn.addEventListener("click", () => decriment(btn))
);

let calculation = () => {
  const cartCounter = document.querySelector(".cart__number-items");
  const total = basket.reduce((sum, item) => (sum + item.item), 0);
  cartCounter.textContent = total;
};
