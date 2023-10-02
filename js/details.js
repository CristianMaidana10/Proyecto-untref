const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

if (productId) {
  const productKey = `product_${productId}`;
  const selectedProduct = JSON.parse(localStorage.getItem(productKey));

  if (selectedProduct) {
    const productNameElement = document.getElementById("productName");
    productNameElement.textContent = selectedProduct.name;

    const productDescriptionElement =
      document.getElementById("productDescription");
    productDescriptionElement.textContent = selectedProduct.description;

    const productPriceElement = document.getElementById("productPrice");
    productPriceElement.textContent = `$ ${selectedProduct.price}`;

    const productStockElement = document.getElementById("productStock");
    productStockElement.textContent = `Stock: ${selectedProduct.stock}`;

    const productImageElement = document.getElementById("productImage");
    productImageElement.src = selectedProduct.image;

    const productScoreElement = document.getElementById("productScore");
    productScoreElement.textContent = selectedProduct.score;

    const productScore = selectedProduct.score;

    console.log(selectedProduct);
    console.log("productScore:", productScore);

    const starsContainer = document.getElementById("starsContainer");
    starsContainer.innerHTML = "";

    const totalStars = 5;

    const fullStars = Math.floor(productScore);

    const halfStar = (productScore % 1).toFixed(1) >= 0.5 ? 1 : 0;

    const emptyStars = totalStars - fullStars - halfStar;

    for (let i = 0; i < fullStars; i++) {
      const star = document.createElement("i");
      star.classList.add("fas", "fa-star");
      starsContainer.appendChild(star);
    }

    if (halfStar === 1) {
      const halfStarIcon = document.createElement("i");
      halfStarIcon.classList.add("fas", "fa-star-half-alt");
      starsContainer.appendChild(halfStarIcon);
    }

    for (let i = 0; i < emptyStars; i++) {
      const star = document.createElement("i");
      star.classList.add("far", "fa-star");
      starsContainer.appendChild(star);
    }

    console.log("fullStars:", fullStars);
    console.log("halfStar:", halfStar);

    const goBackButton = document.getElementById("goBackButton");

    goBackButton.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  } else {
    console.error(
      `Producto con clave ${productKey} no encontrado en localStorage`
    );
  }
} else {
  console.error("ID de producto no proporcionado en la URL");
}
