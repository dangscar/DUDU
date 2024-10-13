document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logout'); // Chọn nút đăng xuất
    const logoutModal = document.getElementById('logoutModal');
    const confirmLogoutButton = document.getElementById('confirmLogout');
    const cancelLogoutButton = document.getElementById('cancelLogout');

    // Hiển thị modal khi nhấn nút Đăng Xuất
    logoutButton.addEventListener('click', function (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
        logoutModal.style.display = 'flex'; // Hiển thị modal
    });

    // Xử lý nút Đăng Xuất trong modal
    confirmLogoutButton.addEventListener('click', function () {
        // Chuyển hướng đến trang bạn muốn
        window.location.href = 'home_guest.html'; // Thay đổi đường dẫn đến trang đăng xuất
    });

    // Xử lý nút Hủy trong modal
    cancelLogoutButton.addEventListener('click', function () {
        logoutModal.style.display = 'none'; // Đóng modal
    });

    // Đóng modal nếu người dùng nhấp ra ngoài modal-content
    window.addEventListener('click', function (event) {
        if (event.target === logoutModal) {
            logoutModal.style.display = 'none'; // Đóng modal
        }
    });
});
