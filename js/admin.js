const form = document.querySelector("#form");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const boardGameData = new FormData(form);
  const imageItem = boardGameData.get("image");

  if (!imageItem || !imageItem.name) {
    alert("Please upload an image!");
    return;
  }

  const formData = new FormData();
  formData.append("image", imageItem);

  try {
    const response = await fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Image upload failed");

    const imageUrl = result.imageUrl; // Отримуємо шлях до зображення

    let shopItemsData = JSON.parse(localStorage.getItem("shopItemsData")) || [];

    const newGame = {
      id: `bg${shopItemsData.length + 1}`,
      image: imageUrl, // Зберігаємо URL зображення
      linkBgg: boardGameData.get("linkBgg"),
      video: boardGameData.get("video"),
      name: boardGameData.get("name"),
      shortName: boardGameData.get("shortName"),
      price: Number(boardGameData.get("price")),
      description: boardGameData.get("description"),
    };

    shopItemsData.push(newGame);
    localStorage.setItem("shopItemsData", JSON.stringify(shopItemsData));

    alert("Game added successfully!");
    form.reset();
  } catch (error) {
    console.error("Upload error:", error);
    alert("Error uploading image.");
  }
});
