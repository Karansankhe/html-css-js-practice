const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.top = `${index * 100}%`;
});

const navigate = (direction) => {
    counter += direction;
    slideImage();
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateY(-${counter * 100}%)`;
    });
};
