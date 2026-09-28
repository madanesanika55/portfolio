// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


// ===============================
// SCROLL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

  revealElements.forEach((element) => {

    const elementTop = element.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }

  });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

  event.preventDefault();

  formMessage.textContent =
    "Thank you! Your message has been submitted.";

  contactForm.reset();

});


// ===============================
// CURRENT YEAR
// ===============================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();