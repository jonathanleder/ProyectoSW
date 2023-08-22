let currentIndex = 0;

function changeSlide(n) {
    currentIndex += n;
    const slides = document.querySelectorAll(".slide");
    
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    
    slides.forEach(slide => slide.classList.remove("active"));
    slides[currentIndex].classList.add("active");
}