document.addEventListener('DOMContentLoaded', function() {
    const productsPerPage = 4;
    let currentPage = 1;

    function showPage(page) {
        const productItems = document.querySelectorAll('.product-item'); // Chọn các item sau khi đã được render
        const pagination = document.getElementById('paginationContainer');
        const totalPages = Math.ceil(productItems.length / productsPerPage);
        
        if (page < 1) page = 1;
        if (page > totalPages) page = totalPages;
        currentPage = page;

        productItems.forEach(product => {
            product.style.display = 'none'; // Ẩn tất cả
        });

        const start = (page - 1) * productsPerPage;
        const end = start + productsPerPage;
        for (let i = start; i < end && i < productItems.length; i++) {
            productItems[i].style.display = 'block'; // Hiển thị sản phẩm trên trang hiện tại
        }

        // Cập nhật phân trang
        const pageLinks = pagination.querySelectorAll('a');
        pageLinks.forEach(link => link.classList.remove('active'));
        pagination.querySelector(`a[data-page="${page}"]`).classList.add('active');
    }

    function createPagination() {
        const pagination = document.getElementById('paginationContainer');
        const productItems = document.querySelectorAll('.product-item');
        const totalPages = Math.ceil(productItems.length / productsPerPage);

        pagination.innerHTML = ''; // Xóa nội dung cũ

        const prev = document.createElement('a');
        prev.innerHTML = '&laquo;';
        prev.href = '#';
        prev.addEventListener('click', function(e) {
            e.preventDefault();
            showPage(currentPage - 1);
        });
        pagination.appendChild(prev);

        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement('a');
            pageLink.innerHTML = i;
            pageLink.href = '#';
            pageLink.setAttribute('data-page', i);
            if (i === 1) pageLink.classList.add('active');
            pageLink.addEventListener('click', function(e) {
                e.preventDefault();
                showPage(i);
            });
            pagination.appendChild(pageLink);
        }

        const next = document.createElement('a');
        next.innerHTML = '&raquo;';
        next.href = '#';
        next.addEventListener('click', function(e) {
            e.preventDefault();
            showPage(currentPage + 1);
        });
        pagination.appendChild(next);
    }

    // Khởi tạo phân trang và hiển thị trang đầu tiên
    createPagination();
    showPage(1);
});
