const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active'); // Toggles the class for the slide effect
    burger.classList.toggle('toggle'); // For hamburger animation
});



