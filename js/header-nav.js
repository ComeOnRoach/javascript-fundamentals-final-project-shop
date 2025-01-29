const headerNav = document.querySelector(".header__nav-bottom");

const menuLeftSide = ["Kickstarters", "Board Games", "Accessories", "Sale"];
const menuRightSideLogedIn = ["My Orders", "My profile", "Logout"];
const menuRightSideNotLogedIn = ["Register", "Login"];

const generatetHeaderNavMenu = () => {
  if (window.matchMedia("(min-width: 400px)").matches) {
    // setup left side
    const divLeftSide = document.createElement("div");
    divLeftSide.className = "header__nav-menu-container";
    const ulLeftSide = document.createElement("ul");
    ulLeftSide.className = "nav__menu";

    // setup right side
    const divRightSide = document.createElement("div");
    divRightSide.className = "header__nav-menu-container";
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

  if (window.matchMedia("(min-width: 320px)").matches) {
    
  }
};

generatetHeaderNavMenu();
