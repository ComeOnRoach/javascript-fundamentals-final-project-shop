import shopItemsData from "./board-games-storage.js";

const shop = document.querySelector("#shop");

let basket = JSON.parse(localStorage.getItem("data")) ?? [];

const generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((item) => {
      // Destructuring
      const { id, image, name, price } = item;
      const searchItemsInBasket =
        basket.find((boradGame) => boradGame.id === id) ?? [];
      return `
      <div id="product-id-${id}" class="shop__item">
        <img src="${image}" alt="${name}" />
        <div class="detailes">
          <h3>${name}</h3>
          <div class="price-quantity">
            <h2>€ ${price.toFixed(2)}</h2>
            <div class="buttons">
              <i class="bi bi-plus-lg"></i>
              <div id="${id}" class="quantity">${
        searchItemsInBasket.item ?? 0
      }</div>
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
  update(quantityId);
  //LocalStorage
  localStorage.setItem("data", JSON.stringify(basket));
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

  update(quantityId);
  basket = basket.filter((boradGame) => boradGame.item > 0);
  //LocalStorage
  localStorage.setItem("data", JSON.stringify(basket));
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
  const totalCounter = basket.reduce((sum, item) => sum + item.item, 0);
  cartCounter.textContent = totalCounter;
};

calculation();
