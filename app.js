const slider = document.getElementById('SliderContainer');
const sliderImages = slider.getElementsByClassName('sliderImages')[0].children;
const sliderArrowRight = slider.getElementsByClassName('arrowRight')[0];
const sliderArrowLeft = slider.getElementsByClassName('arrowLeft')[0];
sliderArrowRight.addEventListener('click', toRight);
sliderArrowLeft.addEventListener('click', toLeft);
currentSlider = 0;
function toRight() {
    sliderImages[currentSlider].classList.remove('active');
    if (currentSlider === sliderImages.length - 1) {
        currentSlider = 0;
    } else {
        currentSlider++
    }
    sliderImages[currentSlider].classList.add('active');
}
function toLeft() {
    sliderImages[currentSlider].classList.remove('active');
    if (currentSlider === 0) {
        currentSlider = sliderImages.length - 1;
    } else {
        currentSlider--
    }
    sliderImages[currentSlider].classList.add('active');
}
setInterval(toRight, 5000);