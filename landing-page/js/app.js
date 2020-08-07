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
 */

 /**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//### : show scroll up button only when page is not top
const up = document.querySelector('#up');
const up2 = document.querySelector('button');
const header = document.querySelector('header');
up.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:'smooth'
    });
});

window.addEventListener('scroll', () => {
    if(window.pageYOffset <= 500) {up2.style.visibility = 'hidden';}
    else{up2.style.visibility = 'visible';}

    header.style.cssText='display:inline;';    
    //### : Hide Navigation Bar while not scrolling
    setTimeout( () => {
        header.style.cssText='display:none;';    
    }, 10000);
    
});
//### : Highlight Navigation Bar Items when the section is being viewed
window.addEventListener('scroll', () => {
    if(section1anchor.className == 'your-active-class') {navlist1.style.backgroundColor = 'white';}
    else{navlist1.style.backgroundColor = '#cc1';}

    if(section2anchor.className == 'your-active-class') {navlist2.style.backgroundColor = 'white';}
    else{navlist2.style.backgroundColor = '#cc1';}

    if(section3anchor.className == 'your-active-class') {navlist3.style.backgroundColor = 'white';}
    else{navlist3.style.backgroundColor = '#cc1';}

    if(section4anchor.className == 'your-active-class') {navlist4.style.backgroundColor = 'white';}
    else{navlist4.style.backgroundColor = '#cc1';}
});

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the Navigation Bar with it's lists
    const navUl = document.querySelector('#navbar__list');

    const navlist1 = document.createElement('li');
    const navlist2 = document.createElement('li');
    const navlist3 = document.createElement('li');
    const navlist4 = document.createElement('li');
        
    navlist1.innerHTML = '<a>Section1</a>';
    navlist2.innerHTML = '<a>Section2</a>';
    navlist3.innerHTML = '<a>Section3</a>';
    navlist4.innerHTML = '<a>Section4</a>';
    
    navUl.appendChild(navlist1);
    navUl.appendChild(navlist2);
    navUl.appendChild(navlist3);
    navUl.appendChild(navlist4);

// Scroll to anchor ID using scrollTO event # + Add class 'active' to section when the navlis being clicked.
// Section #1
const section1anchor = document.querySelector('#section1');
const section1coord = section1anchor.getBoundingClientRect();
navlist1.addEventListener('click',  () => {
    
    window.scrollTo({
        top: section1coord.top,
        left: 0,
        behavior: 'smooth'
    }); 
    section1ActiveAnchor();
});

// Section 2
const section2anchor = document.querySelector('#section2');
const section2coord = section2anchor.getBoundingClientRect();
navlist2.addEventListener('click', () => {
    window.scrollTo({
        top: section2coord.top,
        left: 0,
        behavior: 'smooth'
    }); 
    section2ActiveAnchor();
});

// Section 3
const section3anchor = document.querySelector('#section3');
const section3coord = section3anchor.getBoundingClientRect();
navlist3.addEventListener('click', () => {
    
    window.scrollTo({
        top: section3coord.top,
        left: 0,
        behavior: 'smooth'
    });
    section3ActiveAnchor();
});

// Section 4
const section4anchor = document.querySelector('#section4');
const section4coord = section4anchor.getBoundingClientRect();
navlist4.addEventListener('click', () => {

    window.scrollTo({
        top: section4coord.top,
        left: 0,
        behavior: 'smooth'
    });
    section4ActiveAnchor();
});   

/**
 * End Main Functions
 * Begin Events
 * 
*/
// Set sections as active
const SectionsCoords = [section1coord,section2coord,section3coord,section4coord];
const Sections = [section1anchor,section2anchor,section3anchor,section4anchor];
// set active class for sections while scrolling
window.addEventListener('scroll', () => {
    if((window.pageYOffset >= SectionsCoords[0].top) && (window.pageYOffset <= SectionsCoords[0].bottom)){
        Sections[0].classList.add('your-active-class');
        Sections[1].classList.remove('your-active-class');
        Sections[2].classList.remove('your-active-class');
        Sections[3].classList.remove('your-active-class');
    }

    if((window.pageYOffset >= SectionsCoords[1].top) && (window.pageYOffset <= SectionsCoords[1].bottom)){
        Sections[1].classList.add('your-active-class');
        Sections[0].classList.remove('your-active-class');
        Sections[2].classList.remove('your-active-class');
        Sections[3].classList.remove('your-active-class');
    }

    if((window.pageYOffset >= SectionsCoords[2].top) && (window.pageYOffset <= SectionsCoords[2].bottom)){
        Sections[2].classList.add('your-active-class');
        Sections[0].classList.remove('your-active-class');
        Sections[1].classList.remove('your-active-class');
        Sections[3].classList.remove('your-active-class');
    }

    if((window.pageYOffset >= SectionsCoords[3].top) && (window.pageYOffset <= SectionsCoords[3].bottom)){
        Sections[3].classList.add('your-active-class');
        Sections[0].classList.remove('your-active-class');
        Sections[1].classList.remove('your-active-class');
        Sections[2].classList.remove('your-active-class');
    }
});

// Functions
// function to add the active class to section 1
function section1ActiveAnchor(){
    section1anchor.classList.toggle('your-active-class');
    section2anchor.classList.remove('your-active-class');
    section3anchor.classList.remove('your-active-class');
    section4anchor.classList.remove('your-active-class');
}
// function to add the active class to section 2
function section2ActiveAnchor(){
    section2anchor.classList.toggle('your-active-class');
    section1anchor.classList.remove('your-active-class');
    section3anchor.classList.remove('your-active-class');
    section4anchor.classList.remove('your-active-class'); 
}
// function to add the active class to section 3
function section3ActiveAnchor(){
    section3anchor.classList.toggle('your-active-class');
    section1anchor.classList.remove('your-active-class');
    section2anchor.classList.remove('your-active-class');
    section4anchor.classList.remove('your-active-class');
}
// function to add the active class to section 4
function section4ActiveAnchor(){
    section4anchor.classList.toggle('your-active-class');
    section1anchor.classList.remove('your-active-class');
    section2anchor.classList.remove('your-active-class');
    section3anchor.classList.remove('your-active-class');
}