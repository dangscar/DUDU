let currentSlide = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = (index === currentSlide) ? 'block' : 'none'; // Hiển thị slide hiện tại
    });
}

function changeSlide(n) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + n + slides.length) % slides.length; // Thay đổi chỉ số slide
    showSlides();
}

// Khởi động slider
showSlides();
