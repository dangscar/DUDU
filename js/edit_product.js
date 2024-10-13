document.addEventListener('DOMContentLoaded', function() {
    const editButtons = document.querySelectorAll('.edit-button');

    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id'); // Lấy ID sản phẩm
            window.location.href = `abc.html?id=${productId}`; // Chuyển hướng đến trang abc.html
        });
    });
});

