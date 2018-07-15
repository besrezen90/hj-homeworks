'use strict'
// container.querySelector('.slides').firstElementChild.classList.add('slide-current');

function Slider(container) {
    container.querySelector('.slides').firstElementChild.classList.add('slide-current');
    const next = container.querySelector('.slider-nav a[data-action="next"]'),
        prev = container.querySelector('.slider-nav a[data-action="prev"]'),
        first = container.querySelector('.slider-nav a[data-action="first"]'),
        last = container.querySelector('.slider-nav a[data-action="last"]'),
        slides = container.querySelector('.slides');

    next.addEventListener('click', event => moveSlide(true));
    prev.addEventListener('click', event => moveSlide(false));
    first.addEventListener('click', event => moveSlide(false));
    last.addEventListener('click', event => moveSlide(true));
    first.click();

    function moveSlide(isForward) {
        if (event.target.classList.contains('disabled')) return
        const currentSlide = container.querySelector('.slide-current');
        let nextSlide = isForward = isForward ? currentSlide.nextElementSibling : currentSlide.previousElementSibling;
        if (event.target === last) nextSlide = slides.lastElementChild;
        if (event.target === first) nextSlide = slides.firstElementChild;
        if (nextSlide === slides.lastElementChild) {
            next.classList.add("disabled")
            last.classList.add("disabled")
        } else {
            next.classList.remove("disabled")
            last.classList.remove("disabled")
        }
        if (nextSlide === slides.firstElementChild) {
            prev.classList.add("disabled")
            first.classList.add("disabled")
        } else {
            prev.classList.remove("disabled")
            first.classList.remove("disabled")
        }
        currentSlide.classList.remove('slide-current');
        nextSlide.classList.add('slide-current');
    }
}


const sliders = document.querySelectorAll('.slider');
document.addEventListener('DOMContentLoaded', function () {
    Array.from(sliders).forEach(slider => Slider(slider));
});