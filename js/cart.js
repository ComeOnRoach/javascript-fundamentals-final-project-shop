import shopItemsData from "./board-games-storage.js";
// не можу розібратись з імпортами
// import utils from "./shop.js"

let basket = JSON.parse(localStorage.getItem("data")) ?? [];

let shoppingCart = document.querySelector("#shopping-cart");
let label = document.querySelector("#label");

let generateCartItemsCart = () => {
  shoppingCart.innerHTML = "";
  if (basket.length !== 0) {
    shoppingCart.append(
      basket.forEach((boardGame) => {
        const searchedItemById =
          shopItemsData.find((item) => item.id === boardGame.id) ?? [];
        const { id, image, price, shortName } = searchedItemById;

        // DOM Setup Elements
        const divCartItem = document.createElement("div");
        const itemImage = document.createElement("img");
        const divDetails = document.createElement("div");
        const divTitlePriceX = document.createElement("div");
        const h4 = document.createElement("h4");
        const pCartName = document.createElement("p");
        const pcartPrice = document.createElement("p");
        const divXbtn = document.createElement("div");
        const boostrapX = document.createElement("i");
        const divCartButtons = document.createElement("div");
        const h3 = document.createElement('h3');
        const boostrapPlus = document.createElement("i");
        const divQuantity = document.createElement('div');
        const boostrapDash = document.createElement("i");


        divCartItem.setAttribute("class", "cart-item");
        itemImage.setAttribute("src", `${image}`);
        divDetails.setAttribute("class", "details");
        divTitlePriceX.setAttribute("class", "title-price-x");
        pCartName.setAttribute("class", "cart__name");
        pcartPrice.setAttribute("class", "cart__price");
        boostrapX.setAttribute("class", "bi bi-x-lg");
        divCartButtons.setAttribute("class", "buttons cart-buttons");
        boostrapPlus.setAttribute("class", "bi bi-plus-lg");
        divQuantity.setAttribute("class", "quantity");
        divQuantity.setAttribute("id", `${id}`);
        boostrapDash.setAttribute("class", "bi bi-dash-lg");

        pCartName.textContent = `${shortName}`;
        pcartPrice.textContent = `€ ${price.toFixed(2)}`;
        divQuantity.textContent = `${boardGame.item}`;

        divCartItem.append(itemImage, divDetails);
        divDetails.append(divTitlePriceX, divCartButtons, h3);
        divTitlePriceX.append(h4, divXbtn);
        h4.append(pCartName, pcartPrice);
        divXbtn.append(boostrapX);
        divCartButtons.append(boostrapPlus, divQuantity, boostrapDash);

        shoppingCart.appendChild(divCartItem);
      })
    );
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

generateCartItemsCart();

const incrementCart = (event) => {
  const selectedItem = event.target
    .closest(".cart-buttons")
    .querySelector(".quantity");
  const search = basket.find((item) => item.id === selectedItem.id);
  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  updateCart(selectedItem.id);
};

const decrimentCart = (event) => {
  const targetedItem = event.target
    .closest(".cart-buttons")
    .querySelector(".quantity");
  const search = basket.find((element) => element.id === targetedItem.id);
  if (search === undefined) return;
  if (search.item > 0) {
    search.item -= 1;
  }

  updateCart(targetedItem.id);
};

const updateCart = (id) => {
  const basketOrigin = basket.length;
  const search = basket.find((element) => element.id === id);
  const updateElement = document.getElementById(`${id}`);

  updateElement.textContent = search.item;

  basket = basket.filter((element) => element.item > 0);

  localStorage.setItem("data", JSON.stringify(basket));
  totalAmountBillCart();
  calculationCart();
  if (basketOrigin !== basket.length) {
    generateCartItemsCart();
  }

  totalPriceItemCalculationCart();
};

const totalPriceItemCalculationCart = () => {
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

const removeItemFromCart = (event) => {
  const parentElement = event.target.closest(".details");
  const quantityElement = parentElement.querySelector(".quantity");
  basket = basket.filter((el) => el.id !== quantityElement.id);
  localStorage.setItem("data", JSON.stringify(basket));
  generateCartItemsCart();
  totalAmountBillCart();
  calculationCart();
  totalPriceItemCalculationCart();
};

totalPriceItemCalculationCart();

let calculationCart = () => {
  const cartCounter = document.querySelector(".cart__number-items");
  const totalCounter = basket.reduce((sum, item) => sum + item.item, 0);
  cartCounter.textContent = totalCounter;
};

calculationCart();

function totalAmountBillCart() {
  if (basket.length !== 0) {
    const totalAmount = basket
      .map((element) => {
        const { id, item } = element;
        const boardGame =
          shopItemsData.find((boardGame) => boardGame.id === id) ?? [];
        return item * boardGame.price;
      })
      .reduce((sum, item) => sum + item, 0);
    // HTML SETUP

    let divTotalAmountBill = document.querySelector(".total-amount-bill");
    let divButtonsCheckoutRemoveAll = document.querySelector(
      ".buttons-checkout-remove-all"
    );

    if (!divTotalAmountBill) {
      divTotalAmountBill = document.createElement("div");
      divButtonsCheckoutRemoveAll = document.createElement("div");
      divTotalAmountBill.setAttribute("class", "total-amount-bill");
      const h2TotalBill = document.createElement("h2");
      h2TotalBill.textContent = `Total Bill: € ${totalAmount.toFixed(2)}`;

      divButtonsCheckoutRemoveAll.setAttribute(
        "class",
        "buttons-checkout-remove-all"
      );

      const buttonCheckout = document.createElement("button");
      buttonCheckout.setAttribute("class", "checkout");
      buttonCheckout.textContent = "CheckOut";
      const buttonRemoveAll = document.createElement("button");
      buttonRemoveAll.textContent = "Clear Cart";
      buttonRemoveAll.setAttribute("class", "removeAll");
      //Generate HTML
      label.append(divTotalAmountBill);
      label.append(divButtonsCheckoutRemoveAll);
      divTotalAmountBill.append(h2TotalBill);
      divButtonsCheckoutRemoveAll.append(buttonCheckout);
      divButtonsCheckoutRemoveAll.append(buttonRemoveAll);
    }
  } else {
    return;
  }
}

totalAmountBillCart();

document
  .querySelector(".removeAll")
  .addEventListener("click", removeAllCartItems);

function removeAllCartItems() {
  basket = [];
  localStorage.setItem("data", JSON.stringify(basket));
  generateCartItemsCart();
  calculationCart();
}

shoppingCart.addEventListener('click', (event) => {
  if(event.target.classList.contains("bi-plus-lg")){
    incrementCart(event);
  }
  if(event.target.classList.contains("bi-dash-lg")){
    decrimentCart(event)
  }
  if(event.target.classList.contains("bi-x-lg")){
    removeItemFromCart(event);
  }
})
