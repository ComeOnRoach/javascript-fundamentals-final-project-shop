import shopItemsData from "./board-games-storage.js";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("#form"); // Отримуємо форму
    const submitBtn = document.querySelector("#submit");

    submitBtn.addEventListener("click", (event) => {
      event.preventDefault();
      let shopItemsData =
        JSON.parse(localStorage.getItem("shopItemsData")) || [];
      const boardGameData = new FormData(form);
      const imageItem = boardGameData.get("image");

      const reader = new FileReader();
      reader.readAsDataURL(imageItem);

      reader.onload = function () {
        const newGame = {
          id: `bg${shopItemsData.length + 1}`,
          image: reader.result,
          linkBgg: `${boardGameData.get("linkBgg")}`,
          video: `${boardGameData.get("video")}`,
          name: `${boardGameData.get("name")}`,
          shortName: `${boardGameData.get("shortName")}`,
          price: `${boardGameData.get("price")}`,
          description: `${boardGameData.get("description")}`,
        };

        shopItemsData.push(newGame);
        localStorage.setItem("shopItemsData", JSON.stringify(shopItemsData));
      };
    });

})

