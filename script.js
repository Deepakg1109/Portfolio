// Typing Effect
const typingText = document.getElementById("typing");
const roles = [
  "Java Developer",
  "Problem Solver",
  "Networking Enthusiast",
  "Cybersecurity Learner",
  "Computer Science Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];
  const currentText = currentRole.substring(0, charIndex);

  typingText.textContent = currentText;

  if (!deleting && charIndex < currentRole.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 55);
  } else {
    deleting = !deleting;

    if (!deleting) {
      roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, 1000);
  }
}
typeEffect();

// Mobile Menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Project Image Slider
const slides = document.querySelectorAll(".project-slider .slide");

let slideIndex = 0;

setInterval(() => {
  slides.forEach(slide => slide.classList.remove("active"));

  slideIndex = (slideIndex + 1) % slides.length;

  slides[slideIndex].classList.add("active");
}, 2500);