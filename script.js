window.addEventListener('scroll', function () {
   const navbar = document.querySelector('.navbar');
   if (window.scrollY > 100) {
     navbar.classList.add('scrolled');
   } else {
     navbar.classList.remove('scrolled');
   }
 });
// Navbar Hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Theme Toggle
const themeToggle = document.querySelector('#theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Resume Popup
const resumeBtn = document.querySelector('#resume-btn');
const popup = document.querySelector('#resume-popup');
const popupClose = document.querySelector('#popup-close');
const popupAudio = document.querySelector('#popup-audio');

// Ensure popup is hidden on page load
document.addEventListener('DOMContentLoaded', () => {
    popup.classList.add('hidden');
});

resumeBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default download to show popup first
    popup.classList.remove('hidden');
    popupAudio.play();
    // Trigger download after a 2-second delay to allow the popup to be seen
    setTimeout(() => {
        window.location.href = resumeBtn.getAttribute('href');
    }, 1000);
});

popupClose.addEventListener('click', () => {
    popup.classList.add('hidden');
    popupAudio.pause();
    popupAudio.currentTime = 0;
});
