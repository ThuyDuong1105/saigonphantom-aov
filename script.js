let currentIndex = 0; 
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function hideSlides() {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
}

function showSlide(index) {
    hideSlides();
    slides[index].style.display = 'block';
}

showSlide(currentIndex);

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; 
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
    showSlide(currentIndex);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);
