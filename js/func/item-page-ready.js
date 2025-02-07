document.addEventListener("DOMContentLoaded", async () => {
  const basket = await JSON.parse(localStorage.getItem("data"));
  const element = await JSON.parse(localStorage.getItem("itemData"));

  const observer = new MutationObserver(() => {
    const cartCounter = document.querySelector(".cart__number-items");
    if (cartCounter) {
      observer.disconnect();
      calculation();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });


  let calculation = () => {
    const cartCounter = document.querySelector(".cart__number-items");
    const totalCounter = basket.reduce((sum, item) => sum + item.item, 0);
    cartCounter.textContent = totalCounter;
  }

  const { id, image, linkBgg, video, name, shortName, price, description } =
    element;

  //  if (!element) {
  //    console.error("Дані про товар не знайдено у localStorage!");
  //    return;
  //  }

  const imageItem = document.querySelector(".item-page__img");
  const nameItem = document.querySelector(".name__item");
  const InOutOfStock = document.querySelector(".in-stock-out-of-stock");
  const priceItem = document.querySelector(".price");
  const linkBggItem = document.querySelector(".link-bgg a");
  const descriptionItem = document.querySelector(".description p");
  const cartBtn = document.querySelector(".cart-btn");
  const videoItem = document.querySelector(".video-container");

  imageItem.setAttribute("alt", `${shortName}`);
  imageItem.setAttribute("src", `${image}`);
  InOutOfStock.textContent = "In Stock";
  linkBggItem.setAttribute("href", `${linkBgg}`);
  linkBggItem.setAttribute("target", "_blank");
  nameItem.textContent = name;
  priceItem.textContent = `€ ${price}`;
  descriptionItem.textContent = `${description}`;
  videoItem.innerHTML = `${video}`;
  cartBtn.addEventListener("click", () => {
    const numItems = document.querySelector("#input-id").value;
    if (numItems < 1) return;
    const search = basket.find(element => element.id === id);
    if (search === undefined) {
      basket.push({id: `${id}`, item:`${numItems}`})
    } else {
      search.item += Number(numItems);

    }
    localStorage.setItem('data', JSON.stringify(basket));
    calculation();
  });
});
