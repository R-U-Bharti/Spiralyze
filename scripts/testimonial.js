// let currentSlide = 0;
// const wrapper = document.querySelector(".testimonial-wrapper");
// const dots = document.querySelectorAll(".dot");

// function showSlide(index) {
//     wrapper.style.transform = `translateX(-${index * 100}%)`;
//     dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
//     currentSlide = index;
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % 3;
//     showSlide(currentSlide);
// }

// function prevSlide() {
//     currentSlide = (currentSlide - 1 + 3) % 3;
//     showSlide(currentSlide);
// }

// function goToSlide(index) {
//     showSlide(index);
// }

// setInterval(nextSlide, 5000);

let currentSlide = 0;
const wrapper = document.querySelector(".testimonial-wrapper-inner");
const slides = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");
const totalSlides = slides.length;

function showSlide(index) {
    wrapper.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    currentSlide = index;
}

function nextSlide() {
    console.log('next' , currentSlide)
    currentSlide = (currentSlide + 1) % totalSlides;
    if(currentSlide === totalSlides - 1) {
        
    }
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

function goToSlide(index) {
    showSlide(index);
}

setInterval(nextSlide, 5000); // Auto slide every 5 seconds
