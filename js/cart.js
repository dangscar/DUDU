let cart = JSON.parse(localStorage.getItem('cart')) || [];
let selectedIndex = null; // Biến lưu chỉ số sản phẩm cần xóa

const cartContainer = document.querySelector('.content');
const deleteModal = document.getElementById('deleteModal');
const confirmDeleteButton = document.getElementById('confirmDelete');
const cancelDeleteButton = document.getElementById('cancelDelete');

// Nếu giỏ hàng rỗng, hiển thị thông báo
if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Giỏ hàng của bạn đang trống.</p>';
} else {
    cart.forEach((item, index) => {
        cartContainer.innerHTML += `
        <div class="content-item" data-index="${index}">
            <label class="custom-checkbox">
                <input type="checkbox">
                <span class="checkmark"></span>
            </label>
            <img class="content--item-img" src="${item.image}" alt="${item.name}">
            <div class="content-item-description">
                <span class="item-name">${item.name}</span>
                <div class="content-item-description-info">
                    <span class="item-gia">${item.price.toLocaleString()} VND</span>
                    <div class="item-soluong">Số lượng: <span class="quantity">${item.quantity}</span></div>
                    <button class="item-operator decrement">-</button>
                    <button class="item-operator increment">+</button>
                </div>
            </div>
            <button class="item-delete">
                <img class="item-delete-img" src="../images/x.jpg" alt="Xóa sản phẩm">
            </button>
        </div>
        `;
    });

    // Tính tổng tiền
    const updateTotalPrice = () => {
        const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        document.querySelector('.tongtien-info').textContent = `Tổng tiền: ${totalPrice.toLocaleString()} VND`;
    };
    updateTotalPrice();

    // Xử lý tăng giảm số lượng
    cartContainer.addEventListener('click', (event) => {
        const target = event.target;
        const contentItem = target.closest('.content-item');
        const index = contentItem.dataset.index;

        if (target.classList.contains('increment')) {
            cart[index].quantity++;
        } else if (target.classList.contains('decrement')) {
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
            }
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        contentItem.querySelector('.quantity').textContent = cart[index].quantity;
        updateTotalPrice();
    });

    // Xử lý xóa từng sản phẩm với modal
    document.querySelectorAll('.item-delete').forEach((button, index) => {
        button.addEventListener('click', function () {
            selectedIndex = index; // Lưu lại chỉ số sản phẩm được chọn
            deleteModal.style.display = 'flex'; // Hiển thị modal
        });
    });

    // Xác nhận xóa sản phẩm
    confirmDeleteButton.addEventListener('click', function () {
        if (selectedIndex !== null) {
            cart.splice(selectedIndex, 1); // Xóa sản phẩm khỏi giỏ hàng
            localStorage.setItem('cart', JSON.stringify(cart)); // Cập nhật lại localStorage
            location.reload(); // Tải lại trang để cập nhật giao diện
            deleteModal.style.display = 'none'; // Ẩn modal sau khi xóa
        }
    });

    // Hủy xóa
    cancelDeleteButton.addEventListener('click', function () {
        deleteModal.style.display = 'none'; // Ẩn modal khi người dùng hủy
    });
}

// Xử lý xóa tất cả sản phẩm trong giỏ hàng với modal
document.querySelector('.action-delete').addEventListener('click', function() {
    selectedIndex = 'all'; // Đặt chỉ số là 'all' để xóa tất cả
    deleteModal.style.display = 'flex'; // Hiển thị modal
});

confirmDeleteButton.addEventListener('click', function () {
    if (selectedIndex === 'all') {
        localStorage.removeItem('cart'); // Xóa giỏ hàng khỏi localStorage
        location.reload(); // Tải lại trang để cập nhật giao diện
        deleteModal.style.display = 'none'; // Ẩn modal sau khi xóa
    }
});
// Thêm nút thanh toán và lưu các sản phẩm đã chọn
const payButton = document.querySelector('.action-muahang');

// Xử lý khi nhấn nút thanh toán
payButton.addEventListener('click', function () {
    const selectedItems = [];
    document.querySelectorAll('.content-item input[type="checkbox"]').forEach((checkbox, index) => {
        if (checkbox.checked) {
            selectedItems.push(cart[index]); // Lưu sản phẩm đã chọn vào danh sách
        }
    });

    if (selectedItems.length > 0) {
        localStorage.setItem('selectedItems', JSON.stringify(selectedItems)); // Lưu sản phẩm đã chọn vào localStorage
        window.location.href = 'thanhtoan.html'; // Chuyển sang trang thanh toán
    } else {
        alert('Vui lòng chọn ít nhất một sản phẩm để thanh toán.');
    }
});



