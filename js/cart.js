import { shopItemsData } from "./board-games-storage.js";

let label = document.querySelector("#label");
let shoppingCart = document.querySelector("#shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) ?? [];

let calculation = () => {
  const cartCounter = document.querySelector(".cart__number-items");
  const totalCounter = basket.reduce((sum, item) => sum + item.item, 0);
  cartCounter.textContent = totalCounter;
};

calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket
      .map((boardGame) => {
        const searchedItemById =
          shopItemsData.find((item) => item.id === boardGame.id) ?? [];
        const { id, image, name, price, quantity } = searchedItemById;
        return `
        <div class="cart-item">
            <img src="${image}" alt="${name}">
            <div class="details">
                <div class="title-price-x">
                    <h4>
                        <p>${name}</p>
                        <p>${price}</p>
                    </h4>
                    <i class="bi bi-x-lg"></i>            
                </div>
                <div class="cart-buttons">
                
                </div>
                <h3>$</h3>
            </div>
        </div>
        `;
      })
      .join(""));
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Your shopping Cart is Empty</h2>
    <a href="./index.html">
       <button class="homeBtn">Back to Home Page</button>
    </a>
    
    `;
  }
};

generateCartItems();
