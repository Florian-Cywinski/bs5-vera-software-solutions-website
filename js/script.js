// Replace Text In Header - By using an third party script - 1. Create a new instance (new ReplaceMe) 2. Pass in the target element (class of replace-me) 3. Set some options
const checkReplace = document.querySelector('.replace-me');

if (checkReplace !== null) {    // To make sure the class is there
  const replace = new ReplaceMe(checkReplace, { // ReplaceMe is a new instance of a class from the third party script replaceme.min.js
    animation: 'animated fadeIn',
    speed: 2000,    // 2 s
    separator: ',', // To separate Small Business, Startups, Enterprise - see in index.html
    loopCount: 'infinite',
    autoRun: true,
  });
}

// User Scroll For Navbar
function userScroll() {
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-dark');            // This is a bootstrap class
        navbar.classList.add('border-bottom');      // This is a bootstrap class     
        navbar.classList.add('border-secondary');   // This is a bootstrap class
        navbar.classList.add('navbar-sticky');      // This is a custom class
      } else {
        navbar.classList.remove('bg-dark');
        navbar.classList.remove('border-bottom');
        navbar.classList.remove('border-secondary');
        navbar.classList.remove('navbar-sticky');
      }
    });
}
  
document.addEventListener('DOMContentLoaded', userScroll);


// Video Modal
const videoBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#videoModal');
const video = document.querySelector('#video');
let videoSrc;

if (videoBtn !== null) {    // To check whether the video button is there
  videoBtn.addEventListener('click', () => {
    videoSrc = videoBtn.getAttribute('data-bs-src');    // data-bs-src is the video link (see index.html)
  });
}

if (videoModal !== null) {
  // This executes when the .modal (modal window) gets opened  
  videoModal.addEventListener('shown.bs.modal', () => { // shown.bs.modal is an event of the Bootstrap library
    video.setAttribute( // src is the attribute to set with the value of videoSrc (video YT link) with some parameters (autoplay, another look and info)
      'src',
      videoSrc + '?autoplay=1;modestbranding=1;showInfo=0'
    );
  });
  // This executes when the .modal (modal window) gets closed
  videoModal.addEventListener('hide.bs.modal', () => {  // hide.bs.modal is an event of the Bootstrap library
    video.setAttribute('src', videoSrc);    // src is the attribute to set with the value 
  });
}


// To close the burger menu after clicking a link
const navLinks = document.querySelectorAll(".nav-link");    // Get all the Navbar links

function closeNavbar() {    // Function to close the collapsed menu
  const navbarCollapse = document.querySelector(".navbar-collapse");
  if (navbarCollapse.classList.contains("show")) {
  navbarCollapse.classList.remove("show");
  }
}

navLinks.forEach(function (link) {  // Add click event listeners to all the Navbar links
  link.addEventListener("click", closeNavbar);
});