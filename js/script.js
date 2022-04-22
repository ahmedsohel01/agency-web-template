// Mobile Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll("nav ul li a").forEach((navLink) =>
  navLink.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
// Testimonial Slider
const testimonials = document.querySelectorAll(".testimonial");

const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const maxSlide = testimonials.length;
let curSlide = 0;

// Slide Funcrion
const goToSlide = function (slide) {
  testimonials.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

btnLeft.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
});
btnRight.addEventListener("click", function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
});
