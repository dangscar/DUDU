document.addEventListener('DOMContentLoaded', function() {
    const itemsPerPage = 12;
    let currentPage = 1;

    function displayProducts() {
        const productGrid = document.getElementById('productGrid');
        productGrid.innerHTML = ''; // Xóa nội dung trước đó

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const productsToDisplay = products.slice(startIndex, endIndex);

                productsToDisplay.forEach(product => {
                    const productItem = document.createElement('div');
                    productItem.className = 'product-item';

                    // Thêm thẻ <a> bao quanh toàn bộ thông tin sản phẩm
                    productItem.innerHTML = `
                        <a href='product_detail.html?id=${product.id}' class="product-link">
                            <div class="product-info">
                                <img src="${product.image}" alt="${product.name}">
                                <div class="text-info">
                                    <p>${product.name}</p>
                                    <span>${product.price.toLocaleString()} VND</span>
                                    <button onclick="location.href='product_detail.html?id=${product.id}'">Mua</button>
                                </div>
                            </div>
                        </a>
                    `;
                    productGrid.appendChild(productItem);
                });
            }

            function createPagination() {
                const pagination = document.getElementById('paginationContainer');
                pagination.innerHTML = ''; // Xóa nội dung trước đó
            
                const totalPages = Math.ceil(products.length / itemsPerPage);
                const maxVisiblePages = 4; // Số lượng trang tối đa hiển thị
            
                // Tính toán các trang bắt đầu và kết thúc để hiển thị
                let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
                let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
            
                // Điều chỉnh startPage nếu endPage được điều chỉnh
                if (endPage - startPage < maxVisiblePages - 1) {
                    startPage = Math.max(1, endPage - maxVisiblePages + 1);
                }
            
                // Nút quay lại trang trước
                if (currentPage > 1) {
                    const prev = document.createElement('a');
                    prev.innerHTML = '&laquo;'; // Kí hiệu quay lại
                    prev.href = '#';
                    prev.addEventListener('click', function(e) {
                        e.preventDefault();
                        currentPage--;
                        displayProducts();
                        createPagination();
                    });
                    pagination.appendChild(prev);
                }
            
                // Các nút trang
                for (let i = startPage; i <= endPage; i++) {
                    const pageLink = document.createElement('a');
                    pageLink.innerText = i;
                    pageLink.href = '#';
                    pageLink.addEventListener('click', function(e) {
                        e.preventDefault();
                        currentPage = i;
                        displayProducts();
                        createPagination();
                    });
                    if (i === currentPage) {
                        pageLink.classList.add('active');
                    }
                    pagination.appendChild(pageLink);
                }
            
                // Nút chuyển tới trang tiếp theo
                if (currentPage < totalPages) {
                    const next = document.createElement('a');
                    next.innerHTML = '&raquo;'; // Kí hiệu chuyển tiếp
                    next.href = '#';
                    next.addEventListener('click', function(e) {
                        e.preventDefault();
                        currentPage++;
                        displayProducts();
                        createPagination();
                    });
                    pagination.appendChild(next);
                }
            }
            

            // Khởi tạo phân trang và hiển thị trang đầu tiên
            displayProducts();
            createPagination();
        });