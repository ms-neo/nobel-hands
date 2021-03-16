const menuBtn =document.querySelector('.hamburger');
const navLinks =document.querySelector('.links-list');

menuBtn.addEventListener('click', () => {
menuBtn.classList.toggle('open');
navLinks.classList.toggle('open');
});



