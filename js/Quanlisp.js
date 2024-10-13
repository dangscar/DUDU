document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logout');
    const logoutModal = document.getElementById('logoutModal');
    const confirmLogoutButton = document.getElementById('confirmLogout');
    const cancelLogoutButton = document.getElementById('cancelLogout');

    console.log(logoutButton, logoutModal, confirmLogoutButton, cancelLogoutButton); // Kiểm tra các phần tử có được lấy đúng hay không

    if (!logoutButton || !logoutModal || !confirmLogoutButton || !cancelLogoutButton) {
        console.error("Một hoặc nhiều phần tử không tồn tại!");
        return; // Dừng thực thi nếu có lỗi
    }
    // Hiển thị modal khi nhấn nút Đăng Xuất
    logoutButton.addEventListener('click', function (event) {
        event.preventDefault();
        console.log("Nút Đăng Xuất đã được nhấn."); // Thêm thông báo vào console
        logoutModal.style.display = 'flex';
    });

    // Xử lý nút Đăng Xuất trong modal
    confirmLogoutButton.addEventListener('click', function () {
        alert('Đã nhấn Đăng Xuất'); // Kiểm tra nếu sự kiện được kích hoạt
        fetch('/logout', { method: 'POST' })
            .then(response => {
                if (response.ok) {
                    alert('Đăng xuất thành công!'); // Kiểm tra nếu đăng xuất thành công
                    logoutModal.style.display = 'none';
                    window.location.href = '../html/home_guest.html';
                } else {
                    alert('Có lỗi xảy ra khi đăng xuất.');
                }
            })
            .catch(error => {
                alert('Lỗi xảy ra: ' + error.message); // Hiện lỗi nếu có
            });
    });

    // Xử lý nút Hủy trong modal
    cancelLogoutButton.addEventListener('click', function () {
        logoutModal.style.display = 'none';
    });

    // Đóng modal nếu người dùng nhấp ra ngoài modal-content
    window.addEventListener('click', function (event) {
        if (event.target === logoutModal) {
            logoutModal.style.display = 'none';
        }
    });
});
