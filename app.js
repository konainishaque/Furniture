const carouselContainer = document.querySelector(".carousel-container");
const carousel = document.querySelector(".carousel");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const imgWidth = carousel.querySelector("img").clientWidth;
const numImages = carousel.children.length;
let currentIndex = 0;

function slide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = numImages - 1;
    } else if (currentIndex >= numImages) {
        currentIndex = 0;
    }
    const translateX = -currentIndex * imgWidth;
    carousel.style.transform = `translateX(${translateX}px)`;
}

// Function to advance the carousel automatically
function autoSlide() {
    slide(1); // Advance to the next slide
}

// Set an interval to call the autoSlide function at a regular interval
const interval = setInterval(autoSlide, 5000); // Change 3000 to the desired interval in milliseconds (3 seconds in this example)

// Function to stop the automatic carousel when user interacts with it
function stopAutoSlide() {
    clearInterval(interval);
}

// Event listeners for left and right arrows
arrowLeft.addEventListener("click", () => {
    slide(-1);
    stopAutoSlide();
});

arrowRight.addEventListener("click", () => {
    slide(1);
    stopAutoSlide();
});

// Event listener to resume automatic carousel when user's interaction ends
carouselContainer.addEventListener("mouseleave", () => {
    interval = setInterval(autoSlide, 5000); // Change 3000 to the desired interval
});

// Function to start the automatic carousel when the page
