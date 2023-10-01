const jsonProducts = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : fetch("data/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });

jsonProducts
  .then((products) => {
    for (let i = 0; i < 12 && i < products.length; i++) {
      const product = products[i];
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML += `
        <h3>${product.name}</h3>
      `;

      card.innerHTML += `
        <img class="imagen" src="${product.image}">
      `;

      card.innerHTML += `
        <p class="description">${product.description}</p>
      `;

      card.innerHTML += `
        <p class="price">$ ${product.price}</p>
      `;

      const scrollToTopButton = document.getElementById("scrollToTopButton");
      scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

      window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 300) {
          scrollToTopButton.style.display = "block";
        } else {
          scrollToTopButton.style.display = "none";
        }
      })

      const viewProductButton = document.createElement("button");
      viewProductButton.innerText = "Ver";
      viewProductButton.addEventListener("click", () => {
        const cacheProduct = {
          id: product.id,
          name: product.name,
          description: product.description,
          image: product.image,
          price: product.price,
          stock: product.stock,
        };

        localStorage.setItem("producto", JSON.stringify(cacheProduct));

        location.href = "producto.html";
      });

      card.appendChild(viewProductButton);

      document.querySelector("#productsList").appendChild(card);
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
