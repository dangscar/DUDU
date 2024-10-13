<?php
# File: login.php

# Khai báo thông tin tài khoản (ở đây chỉ là ví dụ)
$admin_phone = '0923456789';
$admin_password = 'admin123';

# Kiểm tra người dùng đã gửi form chưa
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    # Lấy dữ liệu từ form
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $role = $_POST['role'];

    # Kiểm tra đăng nhập
    if ($role === 'admin' && $phone === $admin_phone && $password === $admin_password) {
        # Chuyển hướng đến trang quản lý nếu đúng thông tin admin
        header('Location: ../html/test_homeadimin.html');
        exit();
    } elseif ($role === 'customer') {
        # Thông báo thành công với khách hàng
        echo '<script>alert("Đăng nhập thành công với vai trò khách hàng");</script>';
        echo '<script>window.location.href = "home_customer.html";</script>';
    } else {
        # Thông báo lỗi đăng nhập
        echo '<script>alert("Thông tin đăng nhập không chính xác");</script>';
        echo '<script>window.location.href = "../html/dangnhap.html";</script>';
    }
} /* else {
    # Trường hợp người dùng truy cập trực tiếp mà không thông qua form
    header('Location: ../html/dangnhap.html');
    exit();
} */
?>
