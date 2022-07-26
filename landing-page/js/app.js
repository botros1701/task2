/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

//navigation global variables
const nav= document.getElementById('navbar__list');
//secions global variables
const sections = document.querySelectorAll('section');
// i make a fragment to improve the preformance 
const frag = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// looping over all sections
for (const section of sections) {
  // selecting the data nav of every section
    let Text = section.getAttribute("data-nav");
    // make li element 
    let List = document.createElement("li");
    // add the data nav as a text to the li
    List.innerText= Text;
    // add the List to the fragment to improve preformance
    frag.appendChild(List);
    // when i click on the section it scroll to the section on the page
    List.addEventListener('click', ()=> {
        section.scrollIntoView({behavior: "smooth"});
    });
};
nav.appendChild(frag);
nav.style="color : red; padding: 1%; background: rgba(0,13,60,1) 100% ; text-indent: 30px;";

// add active class when scroll to it 
window.addEventListener('scroll', ()=> {
   for (const section of sections) {
       see = section.getBoundingClientRect();
       if ( see.top >= -600 && see.top <= 550) {
        section.classList.add('your-active-class');
        // remove active class
    }else {
        section.classList.remove('your-active-class');
    }
   };

});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; }// For Chrome, Firefox, IE and Opera



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


