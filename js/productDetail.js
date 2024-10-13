// productDetail.js

// Lấy ID sản phẩm từ URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id'), 10);

// Tìm sản phẩm theo ID
const product = getProductById(productId); // Gọi hàm từ products.js để lấy sản phẩm

// Hiển thị thông tin sản phẩm
if (product) {
    document.getElementById('productDetail').innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-details">
            <h2>${product.name}</h2>
            <p><strong>Giá:</strong> ${product.price.toLocaleString()} VND</p>
            <p><strong>Phân loại:</strong> ${product.category}</p>
            <p><strong>Mô tả:</strong> ${product.description}</p>
            <p><strong>Tình trạng hàng:</strong> ${product.availability}</p>
            <div class="action-buttons">
                <button class="add-cart-btn">THÊM VÀO GIỎ HÀNG</button>
                <button class="buy-now-btn">MUA NGAY</button>
            </div>
        </div>
    `;
} else {
    document.getElementById('productDetail').innerHTML = '<p>Không tìm thấy sản phẩm</p>';
}

// Thêm sự kiện cho nút "THÊM VÀO GIỎ HÀNG"
document.querySelector('.add-cart-btn').addEventListener('click', function() {
    // Lấy dữ liệu giỏ hàng hiện tại từ localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Thêm sản phẩm vào giỏ hàng
    const item = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1 // Số lượng mặc định
    };

    // Kiểm tra nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng
    const existingProductIndex = cart.findIndex(p => p.id === product.id);
    if (existingProductIndex >= 0) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push(item);
    }

    // Lưu giỏ hàng lại vào localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Hiển thị modal thông báo
    const successModal = document.getElementById('successModal');
    successModal.style.display = 'block';
});

// Thêm sự kiện cho nút "MUA NGAY"
document.querySelector('.buy-now-btn').addEventListener('click', function() {
    // Lấy dữ liệu giỏ hàng hiện tại từ localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Thêm sản phẩm vào giỏ hàng
    const item = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1 // Số lượng mặc định
    };

    // Kiểm tra nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng
    const existingProductIndex = cart.findIndex(p => p.id === product.id);
    if (existingProductIndex >= 0) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push(item);
    }

    // Lưu giỏ hàng lại vào localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Chuyển hướng đến trang giỏ hàng
    window.location.href = 'cart.html';
});

// Đóng modal khi bấm vào bất kỳ chỗ nào bên ngoài modal
window.onclick = function(event) {
    const successModal = document.getElementById('successModal');
    if (event.target === successModal) {
        successModal.style.display = 'none';
    }
};

// Đóng modal khi bấm vào nút đóng
document.querySelector('.close').onclick = function() {
    document.getElementById('successModal').style.display = 'none';
};
