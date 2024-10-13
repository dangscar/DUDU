// Tạo một đối tượng để lưu trữ thông tin cá nhân
let userInfo = {
    name: "Nguyễn Văn A",
    phone: "0943846522",
    address: "Đường xyz, P An Khánh, Q Ninh Kiều, Cần Thơ"
};

// Hàm hiển thị thông tin cá nhân
function displayUserInfo() {
    document.getElementById('name-text').textContent = userInfo.name;
    document.getElementById('phone-text').textContent = userInfo.phone;
    document.getElementById('address-text').textContent = userInfo.address;
}

// Gọi hàm hiển thị khi tải trang
window.onload = displayUserInfo;

// Hàm để chỉnh sửa thông tin cá nhân
function editField(textId, inputId) {
    const textElement = document.getElementById(textId);
    const inputElement = document.getElementById(inputId);
    textElement.style.display = 'none';
    inputElement.style.display = 'inline';
    inputElement.focus();
}

// Hàm để lưu lại thông tin đã chỉnh sửa
function saveField(textId, inputId) {
    const textElement = document.getElementById(textId);
    const inputElement = document.getElementById(inputId);

    // Cập nhật thông tin cá nhân trong đối tượng
    if (textId === 'name-text') {
        userInfo.name = inputElement.value;
    } else if (textId === 'phone-text') {
        userInfo.phone = inputElement.value;
    } else if (textId === 'address-text') {
        userInfo.address = inputElement.value;
    }

    // Cập nhật lại nội dung hiển thị và ẩn input
    textElement.textContent = inputElement.value;
    inputElement.style.display = 'none';
    textElement.style.display = 'inline';
}

// Hàm để lưu thông tin vào localStorage
function saveToLocalStorage() {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    alert("Thông tin đã được lưu thành công!");
}

// Hàm để lấy thông tin từ localStorage khi tải trang
function loadFromLocalStorage() {
    const savedInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (savedInfo) {
        userInfo = savedInfo; // Cập nhật lại thông tin từ localStorage
        displayUserInfo();
    }
}

// Gọi hàm loadFromLocalStorage khi trang tải
window.onload = function() {
    loadFromLocalStorage();
    displayUserInfo();
};

// Lưu thông tin khi người dùng nhấn nút LƯU THAY ĐỔI
document.querySelector('.save-btn').addEventListener('click', saveToLocalStorage);
