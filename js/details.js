const selectedProduct = JSON.parse(localStorage.getItem("producto"));

if (selectedProduct) {
    const productNameElement = document.getElementById("productName");
    productNameElement.textContent = selectedProduct.name;

    const productDescriptionElement = document.getElementById("productDescription");
    productDescriptionElement.textContent = selectedProduct.description;

    const productPriceElement = document.getElementById("productPrice");
    productPriceElement.textContent = `$ ${selectedProduct.price}`;

    const productStockElement = document.getElementById("productStock");
    productStockElement.textContent = `Stock: ${selectedProduct.stock}`;

    const productImageElement = document.getElementById("productImage");
    productImageElement.src = selectedProduct.image;
} else {
    location.href = "index.html";
}

