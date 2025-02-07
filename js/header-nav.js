// import {generateBurgerMenu} from "./generate-burger-menu.js"
// import {calculationCart} from "./func/caclculation.js";

const headerNav = document.querySelector(".header__nav-bottom");

const menuLeftSide = ["Kickstarters", "Board Games", "Accessories", "Sale"];
const menuRightSideLogedIn = ["My Orders", "My profile", "Logout"];
const menuRightSideNotLogedIn = ["Register", "Login"];

// window.addEventListener("resize", generatetHeaderNavMenu);

const generatetHeaderNavMenu = () => {
  // setup bottom main container left side
  const divLeftSide = document.createElement("div");
  divLeftSide.className = "header__nav-menu-container";

  // setup bottom main container right side
  const divRightSide = document.createElement("div");
  divRightSide.className = "header__nav-menu-container";

  if (window.matchMedia("(min-width: 930px)").matches) {
    // setup left side
    const ulLeftSide = document.createElement("ul");
    ulLeftSide.className = "nav__menu";

    // setup right side
    const ulRightSide = document.createElement("ul");
    ulRightSide.className = "nav__menu";

    // generate left side
    headerNav.append(divLeftSide);
    divLeftSide.append(ulLeftSide);
    menuLeftSide.forEach((menuOption) => {
      const li = document.createElement("li");
      li.className = "nav__menu-item";
      const a = document.createElement("a");
      ulLeftSide.append(li);
      li.append(a);
      a.textContent = menuOption;
      if (menuOption === "Board Games") {
        a.setAttribute("href", "./index.html");
      }
    });
    // generate right side
    headerNav.append(divRightSide);
    divRightSide.append(ulRightSide);
    menuRightSideLogedIn.forEach((menuOption) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      li.className = "nav__menu-item";
      a.textContent = menuOption;
      ulRightSide.append(li);
      li.append(a);
    });
    const liCart = document.createElement("li");
    liCart.className = "shop-cart-item";
    const aCartItem = document.createElement("a");
    aCartItem.setAttribute("href", "cart.html");
    const buttonCart = document.createElement("button");
    buttonCart.className = "shop-cart";
    const imageCart = document.createElement("img");
    imageCart.setAttribute("src", "img/shopping_cart.svg");
    const cartNumberItems = document.createElement("div");
    cartNumberItems.className = "cart__number-items";
    cartNumberItems.textContent = "0";

    ulRightSide.append(liCart);
    liCart.append(aCartItem);
    aCartItem.append(buttonCart);
    buttonCart.append(imageCart);
    aCartItem.append(cartNumberItems);

    // style part
    const headerNavMenuContainers = document.querySelectorAll("ul");
    headerNavMenuContainers.forEach((el) => {
      el.style.display = "flex";
      el.style.gap = "10px";
    });
  }

  if (window.matchMedia("(max-width: 930px)").matches) {
    // setup left side
    const divBurgerMenuBtn = document.createElement("div");
    const iBurgerBtn = document.createElement("i");
    iBurgerBtn.setAttribute("class", "bi bi-list");
    // setup right side
    const divCart = document.createElement("div");
    divCart.className = "shop-cart-item";
    const aCartItem = document.createElement("a");
    aCartItem.setAttribute("href", "cart.html");
    const buttonCart = document.createElement("button");
    buttonCart.className = "shop-cart";
    const imageCart = document.createElement("img");
    imageCart.setAttribute("src", "img/shopping_cart.svg");
    const cartNumberItems = document.createElement("div");
    cartNumberItems.className = "cart__number-items";
    cartNumberItems.textContent = "0";

    //Styles
    // iBurgerBtn.style.fontSize = "2.3rem"

    //APPEND
    headerNav.append(divLeftSide, divRightSide);

    divLeftSide.append(divBurgerMenuBtn);
    divBurgerMenuBtn.append(iBurgerBtn);

    divRightSide.append(divCart);
    divCart.append(aCartItem);
    aCartItem.append(buttonCart, cartNumberItems);
    buttonCart.append(imageCart);
    //
    // burger menu btn
    //
    iBurgerBtn.addEventListener("click", (event) => {
      const body = document.querySelector("body");
      body.style.position = "relative";
      const offScreenMenu = document.createElement("div");
      offScreenMenu.setAttribute("class", "menu-screen");
      offScreenMenu.textContent = "Hello";

      offScreenMenu.style.position = "absolute";
      offScreenMenu.style.width = "100%";
      offScreenMenu.style.height = "100vh";
      offScreenMenu.style.top = "0";
      offScreenMenu.style.right = "0";
      offScreenMenu.style.zIndex = "5";
      offScreenMenu.style.overflow = "hidden";
      // display - none
      const header = document.querySelector(".header");

      const path = window.location.pathname;

      switch (path) {
        case "/index.html":
          const shop = document.querySelector("#shop");
          header.style.display = "none";
          shop.style.display = "none";
          break;
        case "/cart.html":
          const label = document.querySelector(".text-center");
          const shoppingCart = document.querySelector(".shopping-cart");
          header.style.display = "none";
          label.style.display = "none";
          shoppingCart.style.display = "none";
          break;
      }

      body.append(offScreenMenu);

      offScreenMenu.innerHTML = `
  <div class="header__nav-bottom-burger container">
    <div class="burger-close-cart-btns">
        <div class="shop-cart-item-close-btn">
          <a href="${window.location.href}">
              <i class="bi bi-x-lg"></i>
          </a>
        </div>
      <div class="burger-cart-btn">
        <div class="shop-cart-item">
          <a href="cart.html">
            <button class="shop-cart-burger">
              <img src="img/shopping_cart.svg" alt="shopping_cart" />
            </button>
            <div id='cart__number-items' class="cart__number-items">0</div>
          </a>
        </div>
      </div>
    </div>
    <div class="header__nav-menu-container-burger">
      <ul class="nav__nenu-burger">
        <li class="nav__menu-item-burger"><a href="#">Kickstarters</a></li>
        <li class="nav__menu-item-burger"><a href="index.html">Board Games</a></li>
        <li class="nav__menu-item-burger"><a href="#">Accessories</a></li>
        <li class="nav__menu-item-burger"><a href="#">Sale</a></li>
        <li class="nav__menu-item-burger"><a href="#">My Orders</a></li>
        <li class="nav__menu-item-burger"><a href="#">My profile</a></li>
        <li class="nav__menu-item-burger"><a href="#">Login</a></li>
      </ul>
    </div>

  </div>
      `;
      let calculationBurger = () => {
        const basket = JSON.parse(localStorage.getItem("data"));
        console.log(basket);
        const cartCounter = document.querySelector("#cart__number-items");
        console.log(cartCounter)
        const totalCounter = basket.reduce((sum, item) => sum + item.item, 0);
        cartCounter.textContent = totalCounter;
      };
      calculationBurger();
    });
  }
};

let calculationBurger = () => {
  const basket = JSON.parse(localStorage.getItem("data"));
  console.log(basket);
  const cartCounter = document.querySelector(".cart__number-items");
  const totalCounter = basket.reduce((sum, item) => sum + item.item, 0);
  cartCounter.textContent = totalCounter;
};

generatetHeaderNavMenu();
