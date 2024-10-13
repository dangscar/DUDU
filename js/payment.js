let cart = JSON.parse(localStorage.getItem('selectedItems')) || []; // Lấy dữ liệu đã chọn từ localStorage

const cartItemsContainer = document.getElementById('cartItems');
const totalAmountContainer = document.getElementById('totalAmount');

if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Không có sản phẩm nào trong giỏ hàng.</p>';
} else {
    cart.forEach((item) => {
        cartItemsContainer.innerHTML += `
            <div class="content-thanhtoan">
                <div class="content-thanhtoan-layout-img">
                    <img src="${item.image}" alt="${item.name}" class="content-thanhtoan-layout-img-detail"> 
                </div>  
                <div class="content-thanhtoan-info">
                    <div class="content-thanhtoan-info-size">
                        <span class="soluong">Số lượng: </span>
                        <span class="gia">Giá: </span>
                        <span class="phivanchuyen">Phí vận chuyển: </span>
                    </div>    
                </div>
                <div class="content-thanhtoan-info">
                    <div class="content-thanhtoan-info-size">
                        <span class="soluong">${item.quantity}</span>
                        <span class="gia">${item.price.toLocaleString()}đ</span>
                        <span class="phivanchuyen">Miễn phí</span>
                    </div>
                </div>
            </div>
        `;
    });

    // Tính tổng thanh toán
    const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    totalAmountContainer.textContent = `${totalAmount.toLocaleString()}đ`; // Cập nhật tổng thanh toán
}

// Hàm để lấy thông tin cá nhân từ localStorage và đổ vào form thanh toán
function loadUserInfoToForm() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    
    if (userInfo) {
        document.getElementById('fname').value = userInfo.name; // Đổ họ tên vào form
        document.getElementById('fphone').value = userInfo.phone; // Đổ số điện thoại vào form
        document.getElementById('faddress').value = userInfo.address; // Đổ địa chỉ vào form
    }
}

// Gọi hàm này khi trang thanh toán tải xong
window.onload = function() {
    loadUserInfoToForm();
};


// Xử lý sự kiện khi nhấn nút Đặt Hàng
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    // Xử lý đặt hàng ở đây (có thể gửi dữ liệu đến server)
    alert('Đặt hàng thành công!');
});
