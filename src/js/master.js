// FAV ICON
const faviconEl = document.querySelector('link[rel="icon"]')

// watch for changes 🕵️
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
mediaQuery.addEventListener('change', themeChange)

// listener 👂
function themeChange(event) {
  if (event.matches) {
    faviconEl.setAttribute('href', 'favicon-dark.png')
  } else {
    faviconEl.setAttribute('href', 'favicon-light.png')
  }
}


// Loadind
var Load = document.getElementById("Loading");
var logoLoad = document.getElementById("logo-load");
function loadfun() {
  Load.style.display = "none";
}
// Create Menue
// let openNav = function openNav() {

//   document.getElementById("mySidenav").style.width = "200px";
// }


// let closeNav = function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   // document.body.style.width = "0";
//     document.getSelection("mySidenav").style.width = "0";
// }
// END
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.body.style.backgroundColor = "white";
  }
// Show Slides



// Button Scrolling
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// Nav navigation
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
// console.log(height);

// Step 3

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

// Step 2
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

// Step 4
headerObserver.observe(header);
// Home Header sticky
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Home Header  Nav-link Target
document.querySelector(".nav-link").addEventListener("click", function (e) {
  e.preventDefault();

  // MAtching strategy
  if (e.target.classList.contains(".nav-link")) {
    const id = e.target.getAttribute("href");
      document.querySelectorAll(id).scrollIntoView({ behavior: "smooth"});
      
  }
});

// Scroll up BTN
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// END

// tab Game content 

function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none"
  }
    // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
    // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
// Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}
// Get the element with id="defaultOpen" and click on it

document.getElementById("defaultOpen").click();
