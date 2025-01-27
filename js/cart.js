import shopItemsData from "./board-games-storage.js";
// не можу розібратись з імпортами
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
        const { id, image, name, price, shortName } = searchedItemById;
        return `
        <div class="cart-item">
            <img src="${image}" alt="${name}">
            <div class="details">
                <div class="title-price-x">
                    <h4>
                        <p class="cart__name">${shortName}</p>
                        <p class="cart__price">€ ${price.toFixed(2)}</p>
                    </h4>
                    <div><i onclick="removeItemFromCart(${id})" class="bi bi-x-lg"></i> </div>           
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
  const basketOrigin = basket.length;
  const search = basket.find(element => element.id === id);
  const updateElement = document.getElementById(`${id}`);

  updateElement.textContent = search.item;

  basket = basket.filter( element => element.item > 0);

  localStorage.setItem("data", JSON.stringify(basket));
  totalAmountBill();
  calculation();
  if (basketOrigin !== basket.length){
    generateCartItems();
  }

  totalPriceItemCalculation();
}

const totalPriceItemCalculation = () => {
  basket.forEach((element, index) => {
    const boardGame = shopItemsData.find(
      (boardGame) => boardGame.id === element.id
    );
    const priceOnScreen = document.querySelectorAll(".details h3");
    priceOnScreen[index].textContent = `Total: € ${(
      boardGame.price * element.item
    ).toFixed(2)}`;
  });
};

const removeItemFromCart = (removeBtnCart) => {
  basket = basket.filter(el => el.id !== removeBtnCart.id);
  localStorage.setItem("data", JSON.stringify(basket));
  generateCartItems();
  totalAmountBill();
  calculation();
  totalPriceItemCalculation();

};

totalPriceItemCalculation();

let calculation = () => {
  const cartCounter = document.querySelector(".cart__number-items");
  const totalCounter = basket.reduce((sum, item) => sum + item.item, 0);
  cartCounter.textContent = totalCounter;
};

calculation();

const totalAmountBill = () => {
  if (basket.length !== 0) {
    const totalAmount = basket.map( element => {
      const { id, item } = element;
      const boardGame = shopItemsData.find( boardGame => boardGame.id === id) ?? [];
      return item * boardGame.price; 
    }).reduce((sum, item) => sum + item, 0);

    label.innerHTML = `
    <div class="total-amount-bill">
      <h2>Total Bill: € ${totalAmount.toFixed(2)}</h2>
    </div>
    <div class="buttons-checkout-remove-all">
      <button class="checkout">CheckOut</button>
      <button class="removeAll">Clear Cart</button>
    </div>
    `;

  } else return;

}

totalAmountBill();


window.increment = increment;
window.decriment = decriment;
window.removeItemFromCart = removeItemFromCart;
