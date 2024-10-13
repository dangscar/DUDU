
// Function to display products
function displayProducts(products) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = ''; // Clear previous products

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        
        // Hiển thị 4 thông tin: ảnh, tên, giá, và nút mua
        productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <p>${product.name}</p>
        <span>${product.price.toLocaleString()} VND</span>
        <button onclick="location.href='product_detail.html?id=${product.id}'">Mua</button>
    `;

        productGrid.appendChild(productItem);
    });
}

// Call function to display products when the page loads
window.onload = function() {
    displayProducts(products);
};
