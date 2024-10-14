const products = [
    { name: "Playera 1", price: 100, category: "anime", img: "img/foto1.jpeg" },
    { name: "Playera 2", price: 120, category: "anime", img: "img/foto2.jpeg" },
    { name: "Playera 3", price: 130, category: "anime", img: "img/foto3.jpeg" },
    { name: "Playera 4", price: 90, category: "anime", img: "img/foto4.jpg" },
    { name: "Playera 5", price: 150, category: "anime", img: "img/foto5.jpeg" },
    { name: "Playera 6", price: 110, category: "anime", img: "img/foto6.jpg" },
    { name: "Playera 7", price: 140, category: "anime", img: "img/foto7.jpeg" },
    { name: "Playera 8", price: 160, category: "anime", img: "img/foto8.jpg" },
    { name: "Playera 9", price: 170, category: "anime", img: "img/foto9.jpg" },
    { name: "Playera 10", price: 180, category: "anime", img: "img/foto10.jpg" },
    { name: "Playera 11", price: 100, category: "deportes", img: "img/foto11.jpg" },
    { name: "Playera 12", price: 90, category: "deportes", img: "img/foto12.jpg" },
    { name: "Playera 13", price: 140, category: "deportes", img: "img/foto13.jpg" },
    { name: "Playera 14", price: 130, category: "deportes", img: "img/foto14.png" },
    { name: "Playera 15", price: 120, category: "deportes", img: "img/foto15.jpeg" },
    { name: "Playera 16", price: 160, category: "deportes", img: "img/foto16.jpeg" },
    { name: "Playera 17", price: 170, category: "deportes", img: "img/foto17.jpeg" },
    { name: "Playera 18", price: 180, category: "deportes", img: "img/foto18.jpeg" },
    { name: "Playera 19", price: 100, category: "deportes", img: "img/foto19.jpg" },
    { name: "Playera 20", price: 90, category: "deportes", img: "img/foto20.png" },
    { name: "Playera 21", price: 140, category: "deportes", img: "img/foto21.jpg" },
    { name: "Playera 22", price: 130, category: "deportes", img: "img/foto22.jpeg" },
    { name: "Playera 23", price: 120, category: "deportes", img: "img/foto23.jpg" },
];

function displayProducts(filter = "all") {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Limpiar la lista actual

    const filteredProducts = products.filter(product => filter === "all" || product.category === filter);

    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Q${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Añadir al carrito</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Inicializar mostrando todos los productos
displayProducts();

// Manejar el cambio de selección
document.getElementById("category-select").addEventListener("change", function() {
    const selectedCategory = this.value === "anime" ? "anime" : this.value === "deportes" ? "deportes" : "all";
    displayProducts(selectedCategory);
});
