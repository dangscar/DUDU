document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn hành động gửi form mặc định
        
        var phone = document.getElementById('phone').value;
        var password = document.getElementById('password').value;
        var role = document.getElementById('role').value;
        
        // Kiểm tra thông tin đăng nhập
        if (role === 'admin' && phone === '0923456789' && password === 'admin123') {
            window.location.href = 'home_admin.html'; // Chuyển hướng đến trang quản lý
        } else if (role === 'customer' && phone === '0901234567' && password === 'customer123') {
            alert('Đăng nhập thành công');
            window.location.href = 'home_customer.html'; // Chuyển hướng đến trang khách hàng

        } else {
            alert('Thông tin đăng nhập không chính xác');
        }
    });
});
