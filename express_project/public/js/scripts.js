// public/scripts.js

// Fetch products from the server
// async function fetchProducts() {
//     try {
//         const response = await fetch('/products');
//         const products = await response.json();
//         displayProducts(products);
//     } catch (error) {
//         console.error('Error fetching products:', error);
//     }
// }

// // Display products in the container
// function displayProducts(products) {
//     const container = document.getElementById('products-container');
//     container.innerHTML = ''; // Clear previous content
//     products.forEach(product => {
//         const productElement = document.createElement('div');
//         productElement.innerHTML = `
//             <h2>${product.name}</h2>
//             <p>Description: ${product.description}</p>
//             <p>Price: $${product.price}</p>
//         `;
//         container.appendChild(productElement);
//     });
// }

// // Fetch and display products when the page loads
// window.onload = fetchProducts;


// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", async function() {
    // Fetch products data from the server
    const response = await fetch('/api/products');
    const products = await response.json();

    // Get the products container
    const productsContainer = document.getElementById('products-container');

    // Loop through each product and create HTML elements to display them
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');
        

        const productName = document.createElement('p');
        productName.textContent = product.name;

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price}`;

        productCard.appendChild(productName);
        productCard.appendChild(productDescription);
        productCard.appendChild(productPrice);

        productsContainer.appendChild(productCard);
    });
});