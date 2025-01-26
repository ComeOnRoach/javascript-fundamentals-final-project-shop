import shopItemsData from "./board-games-storage.js";
// import utils from "./shop.js"

let basket = JSON.parse(localStorage.getItem("data")) ?? [];

let label = document.querySelector("#label");
let shoppingCart = document.querySelector("#shopping-cart");

let generateCartItems = () => {
  if (basket.length !== 0) {
    let cartPage = (shoppingCart.innerHTML = basket
      .map((boardGame) => {
        const searchedItemById =
          shopItemsData.find((item) => item.id === boardGame.id) ?? [];
        const { id, image, name, price } = searchedItemById;
        return `
        <div class="cart-item">
            <img src="${image}" alt="${name}">
            <div class="details">
                <div class="title-price-x">
                    <h4>
                        <p class="cart__name">${name}</p>
                        <p class="cart__price">${price}</p>
                    </h4>
                    <div><i class="bi bi-x-lg"></i> </div>           
                </div>
                <div class="buttons cart-buttons">
                  <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                  <div id="${id}" class="quantity">${boardGame.item}</div>
                  <i onclick="decriment(${id})" class="bi bi-dash-lg"></i>
                </div>                    
                <h3></h3>
            </div>
        </div>
        `;
      })
      .join(""));
    return cartPage;
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

const increment = (item) => {
  const selectedItem = item;
  const search = basket.find((item) => item.id === selectedItem.id);
  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

    update(selectedItem.id);
};

const decriment = (item) => {
  const targetedItem = item;
  const search = basket.find((element) => element.id === targetedItem.id);
  if (search === undefined) return;
  if (search.item > 0) {
    search.item -= 1;
  }

  update(targetedItem.id);
};

const update = (id) => {
  const search = basket.find(element => element.id === id);
  const updateElement = document.getElementById(`${id}`);
  updateElement.innerHTML = search.item;

  basket = basket.filter( element => element.item > 0);

  console.log(basket);

  localStorage.setItem("data", JSON.stringify(basket));

  calculation();

  generateCartItems();
}

let calculation = () => {
  const cartCounter = document.querySelector(".cart__number-items");
  const totalCounter = basket.reduce((sum, item) => sum + item.item, 0);
  cartCounter.textContent = totalCounter;
};

calculation();

window.increment = increment;
window.decriment = decriment;
