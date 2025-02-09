// import shopItemsData from "./board-games-storage.js";
let shopItemsData = JSON.parse(localStorage.getItem("shopItemsData")) ?? [];

// document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  const submitBtn = document.querySelector("#submit");

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let shopItems = JSON.parse(localStorage.getItem("shopItemsData")) || [
      ...shopItemsData,
    ];
    const boardGameData = new FormData(form);

    const imageItem = boardGameData.get("image");

    if (!imageItem || !imageItem.name) {
      alert("Please upload an image!");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(imageItem);

    reader.onload = function () {
      const newGame = {
        id: `bg${shopItemsData.length + 1}`,
        image: reader.result,
        linkBgg: boardGameData.get("linkBgg"),
        video: boardGameData.get("video"),
        name: boardGameData.get("name"),
        shortName: boardGameData.get("shortName"),
        price: Number(boardGameData.get("price")),
        description: boardGameData.get("description"),
      };

      console.log(boardGameData);
      console.log(newGame);

      shopItems.push(newGame);
      localStorage.setItem("shopItemsData", JSON.stringify(shopItems));
      alert("Game added successfully!");
    };
  });
// });
